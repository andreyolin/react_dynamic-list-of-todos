import React from 'react';

interface Props {
  query: string,
  onQueryChange: (newQuery: string) => void,
  status: string,
  onStatusChange: (newStatus: string) => void,
  onAppliedQueryChange: (newAppliedQuery: string) => void,
  onResetAppliedQueryChange: () => void,
}

export const TodoFilter: React.FC<Props> = React.memo(
  ({
    query,
    onQueryChange,
    status,
    onStatusChange,
    onAppliedQueryChange,
    onResetAppliedQueryChange,
  }) => {
    return (
      <form className="field has-addons">
        <p className="control">
          <span className="select">
            <select
              data-cy="statusSelect"
              value={status}
              onChange={(event) => onStatusChange(event.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </span>
        </p>

        <p className="control is-expanded has-icons-left has-icons-right">
          <input
            data-cy="searchInput"
            type="text"
            className="input"
            placeholder="Search..."
            value={query}
            onChange={event => {
              onQueryChange(event.target.value);
              onAppliedQueryChange(event.target.value);
            }}
          />
          <span className="icon is-left">
            <i className="fas fa-magnifying-glass" />
          </span>

          {query && (
            <span className="icon is-right" style={{ pointerEvents: 'all' }}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="clearSearchButton"
                type="button"
                className="delete"
                onClick={() => {
                  onQueryChange('');
                  onResetAppliedQueryChange();
                }}
              />
            </span>
          )}
        </p>
      </form>
    );
  },
);