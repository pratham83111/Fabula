"use client";

import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

/** Used by the /login route: shows the login modal as soon as the page loads. */
export default function OpenLoginOnMount() {
  const { openLogin } = useAuth();
  useEffect(() => openLogin(), [openLogin]);
  return null;
}
