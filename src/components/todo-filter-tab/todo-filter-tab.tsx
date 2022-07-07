import styles from './todo-filter-tab.module.scss';
import { filterButtonTitles } from './constants';
import { TTodoFilterTab } from './types';
import { TFilterButtons } from '../../shared/types';

export const TodoFilterTab = ({
  filterButtonClickhandler,
  activeFilter,
}: TTodoFilterTab) => {
  return (
    <div className={styles.filter_tab_container}>
      {filterButtonTitles.map(item => (
        <button
          className={styles.filter_button}
          key={item}
          onClick={() => filterButtonClickhandler(item as TFilterButtons)}
          style={{
            outline: activeFilter === item ? '#1d3557 solid' : 'none',
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
