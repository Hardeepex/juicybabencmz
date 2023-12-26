import React, { FC } from "react";
import { FragmentType } from "@/__generated__";
import { GET_PROFESSIONALS } from "@/fragments";

export interface ProfessionalProps {
  professional: FragmentType<typeof GET_PROFESSIONALS>;
}

const Professional: FC<ProfessionalProps> = ({ professional }) => {
  // Display the professional's details here
  // ...
};

export default Professional;
