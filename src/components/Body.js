const BodyComponent = () => {
  // const [res, setRes] = useState("FLAMES");
  return (
    <div className="main-body">
      <div className="inputs-container">
        <h2>A 🫶 percentage calculator</h2>
        <input placeholder="Enter your name" className="username" />
        <input placeholder="Enter your partners name" className="partnername" />
        <button
          className="submit-btn"
          onClick={() => {
            let uname = document.querySelector(".username").value;
            let pname = document.querySelector(".partnername").value;
            if (uname === "") alert("Enter your name please!");
            else if (pname === "") alert("Enter your partner's name please!");
            else {
              let common = "";

              let first_array = uname
                .toLowerCase()
                .replace(/ /gi, "")
                .split("");
              let second_array = pname
                .toLowerCase()
                .replace(/ /gi, "")
                .split("");
              for (i in first_array) {
                for (j in second_array) {
                  if (first_array[i] == second_array[j]) {
                    first_array[i] = "";
                    second_array[j] = "";
                  }
                }
              }
              final_string = first_array.join("") + second_array.join("");
              let number = final_string.length;
              let string = "FLAMES";
              while (string.length >= 2) {
                let j = 0;
                let process = [];
                let position = number % string.length;
                if (position != 0) {
                  for (let i = position + 1; i <= string.length; i++) {
                    process[j] = string.charAt(i - 1);
                    j++;
                  }
                  for (let i = 0; i <= position - 2; i++) {
                    process[j] = string.charAt(i);
                    j++;
                  }
                  string = process.toString().replace(/,/gi, "");
                } else {
                  string = string.slice(0, -1);
                }
              }
              console.log(string);
              let FLAMES = {
                F: ["Friendship 🧉", "East or west you guys are best friends."],
                L: [
                  "Love ❤️‍🔥",
                  "I can see two doves, oh wait results show you are in love.",
                ],
                A: [
                  "Affection 👼",
                  "You guys have a good connection with more affection.",
                ],
                M: [
                  "Marriage 🪢",
                  "Don't know if it's your age, but results show marriage.",
                ],
                E: [
                  "Enemy 😾",
                  "Beware thee, results show that they are your enemy.",
                ],
                S: [
                  "Sibilings 👊",
                  "There are some links, to show that they are your sibilings.",
                ],
              };
              let h3Text = document.querySelector(".result");
              let h2Text = document.querySelector(".res-desc");
              h2Text.textContent = `${FLAMES[string][1]}`;
              h3Text.textContent = `${FLAMES[string][0]}`;
            }
          }}
        >
          Submit
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            let uname = document.querySelector(".username");
            let pname = document.querySelector(".partnername");
            let h2Text = document.querySelector(".res-desc");
            let h3Text = document.querySelector(".result");
            uname.value = "";
            pname.value = "";
            h2Text.value =
              "Enter your's and your partners name to get started!";
            h3Text.value = "";
          }}
        >
          Clear
        </button>
      </div>
      <div className="result-container">
        <h2 className="res-desc">
          Enter your's and your partners name to get started!
        </h2>
        <h1 className="result"></h1>
      </div>
    </div>
  );
};

export default BodyComponent;
