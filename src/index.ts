import type { PluginDescriptor } from "emdash";

export function emdashResend(): PluginDescriptor {
  return {
    id: "emdash-resend",
    version: "0.1.0",
    capabilities: ["email:provide", "network:fetch"],
    allowedHosts: ["api.resend.com"],
    entrypoint: "emdash-plugin-resend/sandbox",
    format: "standard",
  };
}

export default emdashResend;
