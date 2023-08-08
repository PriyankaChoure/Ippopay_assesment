import { useState } from "react";
import styles from "./App.module.css";
import { Button, TextField } from "@mui/material";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Stack, StyledEngineProvider } from "@mui/system";
import { saveAnswerToServer } from "./api";

function App() {
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const saveAnswer = async (details) => {
    try {
      const responseData = await saveAnswerToServer(details);
      console.log("password saved - ", responseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  const verifyPassword = () => {
    let userMessage = [];
    let passwordCount = 0;
    if (!password) {
      userMessage.push("Password can not be empty");
      passwordCount++;
    }
    if (password.length < 6) {
      userMessage.push("Password should be at least 6 character long");
      passwordCount++;
    }
    if (password.length > 20) {
      userMessage.push("Passwod should not be long then 20 characters");
      passwordCount++;
    }
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (
      !password.match(lowerCase) ||
      !password.match(upperCase) ||
      !password.match(numbers)
    ) {
      userMessage.push(
        "password should contain atleast one uppercase one lowercase and on number"
      );
      passwordCount++;
    }
    let repeateRegex = /(.)\1{2,}/;
    if (password.match(repeateRegex)) {
      userMessage.push("please do not repeat one charecter trice");
      passwordCount++;
    }
    setCount(passwordCount);
    setMessage(userMessage);
    if (passwordCount === 0)
      enqueueSnackbar(`${passwordCount}`, { variant: "warning" });
    console.log(userMessage);
    saveAnswer({ password: password, count: passwordCount });
  };
  return (
    <div className={styles.wrapper}>
      <Stack spacing={2} className={styles.form}>
        <h2>Please Enter Password</h2>
        <TextField
          id="password"
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          fullWidth
          placeholder="Enter Password with minimum 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={styles.button}
          variant="contained"
          onClick={verifyPassword}
        >
          Save
        </Button>
        {message.length > 0 && (
          <ul>
            <li>Warnig messages - {count}</li>
            {message.map((msg) => (
              <li>{msg}</li>
            ))}
          </ul>
        )}
      </Stack>
    </div>
  );
}

export default App;
