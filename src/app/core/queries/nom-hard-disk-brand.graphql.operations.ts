import { gql } from "apollo-angular";

export const GET_NOM_HARD_DISK_BRAND = gql`
    query  {
      nomHardDiskBrandList {
        id
        name
      }
    }
`;

export const CREATE_NOM_HARD_DISK_BRAND = gql`
    mutation createHardDiskBrand($input: CreateNomHardDiskBrandInput!) {
      createNomHardDiskBrand(createNomHardDiskBrandInput: $input)
    }
`;

export const UPDATE_NOM_HARD_DISK_BRAND = gql`
    mutation updateNomHardDiskBrand($input: UpdateNomHardDiskBrandInput!) {
      updateNomHardDiskBrand(updateNomHardDiskBrandInput: $input)
    }
`;

export const REMOVE_NOM_HARD_DISK_BRAND = gql`
    mutation removeNomHardDiskBrand($id: Int!) {
      removeNomHardDiskBrand(id: $id)
    }
`;
