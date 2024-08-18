import { gql } from "apollo-angular";

const GET_HARD_DISKS = gql`
    query {
      hard_disks {
        id
        capacity
        brand
        model
        type
      }
    }
`;

const GET_HARD_DISK_BY_ID = gql`
    query {
      hard_disk (id: {
        id: ""
      }) {
        id
        capacity
        brand
        model
        type
      }
    }
`;

const CREATE_HARD_DISK = gql`
    mutation {
      createHardDisk (createHardDiskInput: {
        capacity: "",
        brand: "",
        model: "",
        type: ""
      }) {
        id
        capacity
        brand
        model
        type
      }
    }
`;

export { GET_HARD_DISKS, GET_HARD_DISK_BY_ID, CREATE_HARD_DISK };
