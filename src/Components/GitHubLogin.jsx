import React from "react";

const clientId = "451864b21cab0cc06b0a";
const redirectUri = "http://localhost:3000/callback";

const GitHubLogin = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <div className="h-screen w-screen bg-slate-700">
      <div className=" flex justify-center items-center bg-slate-100 w-72 h-64 absolute mx-[32rem] my-44 rounded-md shadow-lg">
        <div className="flex-row  flex justify-center items-center text-center relative">
          <div className="flex-col text-3xl font-bold  w-screen space-y-20 my-56 text-slate-700">
            Login with GitHub
            <div className="flex justify-center my-2 font-semibold mx-4 px-4">
              <button
                onClick={handleLogin}
                style={{
                  backgroundColor: "#6CB3D6",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "5px",
                  fontSize: "20px",
                  borderRadius: "12px",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GitHubLogin;
