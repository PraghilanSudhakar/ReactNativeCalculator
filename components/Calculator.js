import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Btn } from "./Btn";

const buttons = [
  ["🔥", "👋🏻", "⚡️", "C"],
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
];

export function Calculator({ isEnabled }) {
  const [displayValue, setDisplayValue] = useState("0");

const handlePress = (char) => {
  // Handle number press
  if ("0123456789.".includes(char)) {
    if (displayValue === "0" && char !== ".") {
      setDisplayValue(char);
    } else {
      setDisplayValue(prevDisplayValue => prevDisplayValue + char);
    }
  }
  // Handle operator press
  else if ("+-*/".includes(char)) {
    setDisplayValue(displayValue + char);
  }
  // Handle equals press
  else if (char === "=") {
    if (displayValue !== "Error") {
      try {
        const result = eval(displayValue);
        setDisplayValue(String(result));
       
      } catch (error) {
        setDisplayValue("Error");
      }
    }
  }
  // Handle clear press
  else if (char === "C") {
    setDisplayValue("0");
  }
  else{
    return;
  }
};

  return (
    <View style={styles.container}>
      <Text style={isEnabled? styles.displayEnabled : styles.display }>{displayValue}</Text>
      {buttons.map((buttonRow, i) => (
        <View key={i} style={styles.buttonRow}>
          {buttonRow.map((char) => (
            <Btn key={char} name={char} isEnabled={isEnabled} onPress={() => handlePress(char)} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    fontSize: 70,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 80,
    width: 350, 
    textAlign: 'right',
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  displayEnabled: {
    fontSize: 70,
    marginBottom: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    height: 80,
    width: 350, 
    textAlign: 'right',
    whiteSpace: 'nowrap', 
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
