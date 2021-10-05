import React from "react"
import { Security, ImplicitCallback } from "@okta/okta-react"

const config = {
  issuer: 'https://dev-1150651.okta.com/oauth2/default';
  // TODO make this porduction capable
  redirectUri: 'http://localhost:8000/callback';
  client_id: '0oa246rk8vpK3UHze5d7';
};

const AuthWrapper = ({ element }) => (
  <Security oktaAuth={} restoreOriginalUri={}
)