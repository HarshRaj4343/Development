document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("SearchButton");
    const usernameInput = document.getElementById("leeco");
    const statsContainer = document.querySelector(".stats");
    const easyProgress = document.querySelector(".easyprogress");
    const mediumProgress = document.querySelector(".mediumprogress");
    const hardProgress = document.querySelector(".hardprogress");
    const easylabel = document.getElementById("easylabel");
    const mediumlabel = document.getElementById("mediumlabel");
    const hardlabel = document.getElementById("hardlabel");
    const cardStats = document.querySelector(".statscard");


    function validateUsername(username) {
        if (username.trim() === "") {
            return false;
        }

        const usernameRegex = /^[a-zA-Z0-9_-]+$/;
        return usernameRegex.test(username);
    }

    function updateProgressBar(solved, total, label, circle) {
        const percentage = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${percentage}%`);
        label.textContent = `${solved} / ${total}`;
    }

    function displayUserDetails(data) {
        const totalQuestions = data.data.allQuestionsCount[0].count;
        const easyQuestions = data.data.allQuestionsCount[1].count;
        const mediumQuestions = data.data.allQuestionsCount[2].count;
        const hardQuestions = data.data.allQuestionsCount[3].count;

        const solvedTotalQuestions = data.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyQuestions = data.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumQuestions = data.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardQuestions = data.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgressBar(solvedTotalQuestions, totalQuestions, easylabel, easyProgress);
        updateProgressBar(solvedEasyQuestions, easyQuestions, mediumlabel, mediumProgress);
        updateProgressBar(solvedMediumQuestions, mediumQuestions, hardlabel, hardProgress);
    }


    async function fetchUserDetails(username) {

        try {

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const targetUrl = 'https://leetcode.com/graphql/';
            const proxyURL = 'https://cors-anywhere.herokuapp.com/';
            // concatenated url
            // https://leetcode.com/graphql/https://cors-anywhere.herokuapp.com/
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: `
                    query userSessionProgress($username: String!) {

                        allQuestionsCount {
                            difficulty
                            count
                        }

                        matchedUser(username: $username) {

                            submitStats {

                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }

                                totalSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }
                            }
                        }
                    }
                `,

                variables: {
                    username: username
                }
            });


            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };


            const response = await fetch(proxyURL + targetUrl, requestOptions);

            if (!response.ok) {
                throw new Error("Unable to fetch user details.");
            }

            const parseddata = await response.json();

            console.log(parseddata);

            displayUserDetails(parseddata);

        }

        catch (error) {
            statsContainer.innerHTML =
                `<p style="color: red;">Error: ${error.message}</p>`;
        }

        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }


    searchButton.addEventListener("click", function () {

        const username = usernameInput.value.trim();

        if (!validateUsername(username)) {
            statsContainer.innerHTML =
                `<p style="color: red;">Please enter a valid username.</p>`;
            return;
        }

        fetchUserDetails(username);
    });

});