import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ArticleIcon from '@mui/icons-material/Article';
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ISidebarItem {
  text: string;
  path: string;
  icon: OverridableComponent<any>;
}

export const sidebarItems: ISidebarItem[] = [
  {
    text: "Forms",
    path: "/react-hook-form-example",
    icon: ArticleIcon,
  },
  {
    text: "Dynamic Forms",
    path: "/dynamic-react-hook-form-example",
    icon: DynamicFormIcon,
  },
];
