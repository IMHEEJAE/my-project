import styled from "@emotion/styled";

export const SearchbarWrapper = styled.div`
  width: 100%;
  padding: 0 100px;
  @media (max-width: 1023px) {
    padding: 0 50px;
  }

  @media (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const Searchbar = styled.input`
  width: 100%;
  padding: 0 12px;
  border: none;
  border-bottom: 5px solid #c5c5c5;
  outline-color: #fff;

  :focus {
    border-bottom: 5px solid #3a6625;
  }
`;
