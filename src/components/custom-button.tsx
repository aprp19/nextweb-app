import { Button } from "@modules/@mui/material";
import { FC } from "@modules/@types/react";

interface CustomButtonProps {
  title: string
}

const CustomButton: FC<CustomButtonProps> = ({ title }) => {
  return (
    <Button variant="contained">{title}</Button>
  );
};

CustomButton.displayName = 'CustomButton';
export { CustomButton };