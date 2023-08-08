import { gql } from "@apollo/client";
export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      balance
      createdAt
      amount
      status
      useditem {
        name
      }
    }
  }
`;
export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int) {
    fetchPointTransactionsOfLoading(page: $page) {
      _id
      impUid
      balance
      createdAt
      amount
    }
  }
`;
export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int) {
    fetchPointTransactionsOfSelling(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
      useditem {
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
    }
  }
`;
