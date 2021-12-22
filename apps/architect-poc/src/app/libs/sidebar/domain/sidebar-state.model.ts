import { FavoriteItem } from './favorite-item.model';
import { SidebarLayoutSize } from './sidebar-layout-size.enum';
import { SidebarLayoutStyle } from './sidebar-layout-style.enum';
import { SidebarSection } from './sidebar-section.enum';

export interface SidebarState {
  layoutSize: SidebarLayoutSize;
  layoutStyle: SidebarLayoutStyle;
  isCollapsed: boolean;
  isCollapsedAndVisible: boolean;
  isFavoritesExpanded: boolean;
  isDocsExpanded: boolean;
  sidebarWidth: number;
  isLinksListExpanded: boolean;
  isSidebarDarkMode: boolean;
  expandedSection: SidebarSection | null;
  favoriteItems: FavoriteItem[];
}
