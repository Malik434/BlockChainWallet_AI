import React from "react";
import { View, Text } from "react-native";

const TransactionHistory = ({ transactions }) => {
  return (
    <View>
      <Text>Transaction History:</Text>
      {transactions.map((transaction, index) => (
        <Text key={index}>
          {transaction.amount} ETH - {transaction.date}
        </Text>
      ))}
    </View>
  );
};

export default TransactionHistory;
