import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status = "loading" | "valid" | "already_unsubscribed" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_ANON_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already_unsubscribed");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already_unsubscribed");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="font-display text-2xl font-bold text-foreground">Email Preferences</h1>

        {status === "loading" && <p className="text-muted-foreground">Validating...</p>}

        {status === "valid" && (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Click below to unsubscribe from future emails.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Confirm Unsubscribe
            </button>
          </div>
        )}

        {status === "success" && (
          <p className="text-muted-foreground">You have been successfully unsubscribed.</p>
        )}

        {status === "already_unsubscribed" && (
          <p className="text-muted-foreground">You are already unsubscribed.</p>
        )}

        {status === "invalid" && (
          <p className="text-muted-foreground">This unsubscribe link is invalid or expired.</p>
        )}

        {status === "error" && (
          <p className="text-destructive">Something went wrong. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
