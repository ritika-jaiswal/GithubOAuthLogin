import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const TrendingRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchTrendingRepos();
  }, []);

  const fetchTrendingRepos = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/search/repositories?q=created:%3E2021-01-01&sort=stars&order=desc"
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching trending repos:", error);
    }
  };

  return (
    <div className="flex-row w-screen h-full">
      <div className="flex h-16 bg-slate-100">
        <div className="flex w-[50%] ">
          <div className="flex h-10 w-10 items-center my-4 mx-4 border-2 rounded-md justify-center">
            <img
              src="https://img.icons8.com/?size=60&id=59832&format=png"
              alt="menu icon"
              width="20"
              height="10"
            />
          </div>
          <div className="flex items-center mr-2">
            <img src="https://img.icons8.com/?size=40&id=62856&format=png" />
          </div>
          <div className="flex items-center text-black font-medium ml-2">
            Explore
          </div>
        </div>
        <div className="flex w-[50%]">
          <div className="flex items-center">
            <div class="relative w-full ml-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type to search..."
                required
                style={{ width: ["22rem"], height: ["2rem"] }}
              />
            </div>
          </div>
          <div className="flex items-center ">
            <img src="https://img.icons8.com/?size=25&id=118839&format=png" />
          </div>
          <div className="flex justify-end items-center  rounded-md border-2 h-8 w-14 my-4">
            <img
              src="https://img.icons8.com/?size=15&id=3220&format=png"
              style={{ color: "gray" }}
            />
            <div className="flex px-2">
              {" "}
              <img src="https://img.icons8.com/?size=15&id=CMerTp7AsXH0&format=png" />
            </div>
          </div>

          <div className="flex justify-end items-center ml-2 rounded-md border-2 h-8 w-8 my-4 px-1">
            <img
              src="https://ic.pics.livejournal.com/natamay/12062876/66913/66913_original.png"
              width="20"
              height="20"
              style={{ color: "gray" }}
            />
          </div>
          <div className="flex justify-end items-center ml-2 rounded-md border-2 h-8 w-8 my-4 px-1">
            <img
              src="https://img.icons8.com/?size=20&id=79751&format=png"
              width="20"
              height="20"
              style={{ color: "gray" }}
            />
          </div>
          <div className="flex justify-end items-center ml-2 rounded-md border-2 h-8 w-8 my-4 px-1">
            <img
              src="https://img.icons8.com/?size=20&id=11642&format=png"
              width="20"
              height="20"
              style={{ color: "gray" }}
            />
          </div>
          <div className="flex justify-end items-center ml-2 rounded-full border-2 h-8 w-8 my-4 px-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgBcwdvOdBRkNG2_bfgfDNGjQrQ0kX4nUW4QyEbsC88t8YwmcCwJg3GYzJvY7hRYELQ4U8zucvzY&usqp=CAU&ec=48600113"
              width="20"
              height="20"
              style={{ color: "gray" }}
            />
          </div>
        </div>
      </div>
      <div className="flex bg-white w-screen h-14 text-sm">
        <div className="flex  pl-[10rem] items-center w-[70%] text-gray-600">
          <div className="pr-6">Explore</div>
          <div className="pr-6">Topics</div>
          <div className="pr-6">Trending</div>
          <div className="pr-6">Collections</div>
          <div className="pr-6">Events</div>
          <div className="">Github Sponsors</div>
        </div>
        <div className="flex justify-end pr-[10rem] w-[60%]  items-center font-semibold">
          <button
            style={{
              borderRadius: "8px",
              border: "2px solid #EDEDED",
              padding: "6px",
              backgroundColor: "#FFFFFF",
            }}
          >
            Get email updates
          </button>
        </div>
      </div>
      <div className=" bg-slate-100 h-40">
        <div className="flex justify-center items-center pt-10 text-center mx-[33rem] font-semibold text-3xl">
          Trending
        </div>
        <div className="flex-row text-md flex justify-center mt-2 text-slate-600">
          See what the GitHub community is most excited about today.
        </div>
      </div>
      <div>
        {/* <h2>Trending Repositories</h2> */}
        {/* <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link to={`/repo/${repo.id}`}>{repo.name}</Link>
            </li>
          ))}
        </ul> */}
        <div className="flex justify-center">
          <div className="flex-row w-[70%] h-full bg-white justify-center mt-12 border-2 rounded-lg">
            <div className="flex bg-slate-100 h-16 border-b-2">
              <div className="flex items-center ml-10">
                <div class="inline-flex">
                  <button class="bg-blue-500  text-white text-sm font-semibold py-2 px-4 rounded-r">
                    Repositories
                  </button>
                  <button class="bg-white text-gray-800 text-sm font-semibold py-2 px-4 rounded-r">
                    Developers
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex ml-56">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700  peer"
                  >
                    <option selected>
                      Spoken Language:<b>Any</b>
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="flex ml-8">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700  peer"
                  >
                    <option selected>
                      Language:<b>Any</b>
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="flex ml-8">
                  <label for="underline_select" class="sr-only">
                    Underline select
                  </label>
                  <select
                    id="underline_select"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent  appearance-none dark:text-gray-400 dark:border-gray-700  peer"
                  >
                    <option selected>
                      Date range:<strong>Today</strong>
                    </option>
                    <option value="US">Adjust time span</option>
                    <option value="CA">today</option>
                    <option value="FR">This week</option>
                    <option value="DE">This month</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              {repos.map((repo) => (
                <div className="flex-row h-32 border-b-2 w-full">
                  {console.log(repo, "repo")}
                  <div className="flex">
                    <div className="ml-4 mt-4">
                      <img src="https://img.icons8.com/?size=20&id=33303&format=png" />
                    </div>
                    <div className="mt-3 ml-2 text-blue-500 hover:underline text-lg">
                      <ul>
                        <li key={repo.id}>
                          <NavLink to={`/repo/${repo.id}`}>
                            {repo.full_name}
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex-row ml-4 mt-1">{repo.description}</div>
                  <div className="flex ml-4 text-sm mt-2">
                    <img src={repo.labels_url} />
                    {repo.language}
                    <div className="flex ml-4  h-[1rem]">
                      {
                        <img src="https://img.icons8.com/?size=10&id=16101&format=png" />
                      }
                      <div className="flex ml-1 ">
                        <NavLink to={repo.stargazers_url}>
                          {repo.stargazers_count}
                        </NavLink>
                      </div>
                    </div>
                    <div className="flex ml-4  h-[1rem]">
                      {
                        <img src="https://img.icons8.com/?size=10&id=79746&format=png" />
                      }
                      <div className="flex ml-1 ">
                        <NavLink to={repo.forks_url}>
                          {repo.forks_count}
                        </NavLink>
                      </div>
                    </div>
                    <div className="flex ml-4  h-[1rem]">
                      Built by
                      <div className="flex ml-1 ">
                      <img class="w-6 h-6 rounded-full" src={repo.owner.avatar_url
} alt="Rounded avatar"/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingRepos;
