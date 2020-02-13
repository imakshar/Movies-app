import React, { Component } from "react";

export default class PageNavigation extends Component {
  // componentDidUpdate(preveProps, preveState) {
  //   console.log(preveProps, preveState);
  // }
  render() {
    const { itemPerPage, itemCount, onPageChange, currentpage } = this.props;
    const pages = Math.ceil(itemCount / itemPerPage);

    const range = [...Array(pages)];

    if (pages === 1) return null;

    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {range.map((_, index) => (
              <li
                className={
                  currentpage === index + 1 ? "page-item active" : "page-item"
                }
                key={index + 1}
              >
                <a
                  className="page-link"
                  onClick={() => onPageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
