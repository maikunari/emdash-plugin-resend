import type { PluginDescriptor } from "emdash";

export function emdashResend(): PluginDescriptor {
  return {
    id: "emdash-resend",
    version: "0.1.0",
    description: "Official email provider for EmDash using Resend.",
    capabilities: ["email:provide", "network:fetch"],
    allowedHosts: ["api.resend.com"],
    entrypoint: "emdash-plugin-resend/sandbox",
    format: "standard",
    hooks: {
      "email:deliver": {}
    },
    routes: {
      "admin": {}
    },
    admin: { pages: [{ path: "/settings", label: "Resend", icon: "email" }] },
  };
}

export default emdashResend;
