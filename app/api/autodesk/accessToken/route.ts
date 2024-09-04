import axios from "axios";

export async function GET(request: Request) {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append(
      "scope",
      "code:all data:write data:read bucket:create bucket:delete bucket:read"
    );

    const accessTokenResponse = await axios.post(
      "https://developer.api.autodesk.com/authentication/v2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: "Basic " + process.env.AUTODESK_CLIENT_AUTH_KEYS,
        },
      }
    );
    return Response.json({
      access_token: accessTokenResponse?.data?.access_token,
      expiry: accessTokenResponse?.data?.expires_in,
    });
  } catch (error: any) {
    return new Response(`Failed to fetch access token: ${error.message}`, {
      status: 500,
    });
  }
}
