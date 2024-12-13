export interface Project {
    id: number;
    category: string;
    name?: string;
    image: string;
  }
  
  export interface PortfolioState {
    selectedFilter: string;
    projects: Project[];
  }
  
  export interface ToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
  }
  
  export interface ProjectListProps {
    projects: Project[];
  }
  