import React, { useEffect, useState, useCallback } from "react";
import "../css/FilterTabs.css";
import tabsToggle from "../hooks/tabsToggle";
import { useSelector, useDispatch } from "react-redux";
import category from "../json/category";
import {
  addFilters,
  deleteDetail,
  deleteFilters,
  setLowFilter,
  setMiddleFilter,
  setTabFilters,
  setTopFilter,
} from "../redux/slices/category";

const FilterTabs = () => {
  const { filters } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [currentCategory1, setCurrentCategory1] = useState("");
  const [currentCategory2, setCurrentCategory2] = useState("");
  const [currentCategory3, setCurrentCategory3] = useState("");

  const onClickCategory3 = useCallback(
    (category_3) => {
      dispatch(
        deleteFilters(
          filters
            .filter((item) => item !== currentCategory1)
            .filter((item) => item !== currentCategory2)
        )
      );
      setCurrentCategory3(category_3);
      dispatch(addFilters(category_3));
      dispatch(setLowFilter(category_3));
      dispatch(deleteDetail());
      return dispatch(setTabFilters(category_3));
    },
    [dispatch, currentCategory1, currentCategory2, filters]
  );

  const onClickCategory2 = useCallback(
    (category_2) => {
      if (currentCategory3) setCurrentCategory3("");
      dispatch(
        deleteFilters(filters.filter((item) => item !== currentCategory1))
      );
      setCurrentCategory2(category_2);
      dispatch(addFilters(category_2));
      dispatch(setMiddleFilter(category_2));
      dispatch(deleteDetail());
      dispatch(deleteDetail());
      return dispatch(setTabFilters(category_2));
    },
    [dispatch, currentCategory1, currentCategory3, filters]
  );

  const onClickCategory1 = useCallback(
    (category_1) => {
      if (currentCategory2) setCurrentCategory2("");
      if (currentCategory3) setCurrentCategory3("");
      dispatch(deleteFilters(filters));
      setCurrentCategory1(category_1);
      dispatch(addFilters(category_1));
      dispatch(setTopFilter(category_1));
      dispatch(deleteDetail());
      dispatch(deleteDetail());
      return dispatch(setTabFilters(category_1));
    },
    [dispatch, currentCategory2, currentCategory3, filters]
  );

  useEffect(() => {
    const tabs = document.querySelectorAll(".filter_tabs_categories");
    const cons = document.querySelectorAll(".filter_content_categories");
    const children_tabs = document.querySelectorAll(".filter_tabs_contents");
    const baby_tabs = document.querySelectorAll(
      ".filter_content_children_categories"
    );
    const last_tabs = document.querySelectorAll(
      ".filter_tabs_children_contents"
    );
    tabsToggle(
      tabs,
      cons,
      "filter_tabs_categories_active",
      "filter_content_categories_active"
    );
    tabsToggle(
      children_tabs,
      baby_tabs,
      "filter_tabs_contents_active",
      "filter_content_children_categories_active"
    );
    tabsToggle(last_tabs, null, "filter_tabs_children_contents_active", null);
  }, []);

  return (
    <div className="filter_tabs_container">
      <div className="filter_tabs_category_1">
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className={`filter_tabs_categories`}
              id={`filter_tabs_${index}`}
              onClick={(e) => {
                e.nativeEvent.preventDefault();
                onClickCategory1(item.category_1);
              }}
            >
              <input
                type="radio"
                name="category_1"
                id={`${item.category_1}_1`}
              />
              <label htmlFor={`${item.category_1}_1`}>{item.category_1}</label>
            </div>
          );
        })}
      </div>
      <div className="filter_tabs_category_2_3">
        {category.map((item, index) => {
          return (
            <div
              key={`${index} ${index}`}
              className="filter_content_categories"
            >
              <div>
                {item.category_2.map((item) => {
                  return (
                    <div
                      key={`${item}_2`}
                      className={
                        item === currentCategory2
                          ? `filter_tabs_contents filter_tabs_contents_active`
                          : `filter_tabs_contents`
                      }
                      onClick={(e) => {
                        e.nativeEvent.preventDefault();
                        onClickCategory2(item);
                      }}
                      id={item}
                    >
                      <input type="radio" id={`${item}_2`} name="category_2" />
                      <label htmlFor={`${item}_2`}>{item}</label>
                    </div>
                  );
                })}
              </div>
              <div className="filter_tabs_category_3">
                {item.category_3.map((item) => {
                  return (
                    <div
                      key={item.category_2}
                      id={item.category_2}
                      className="filter_content_children_categories"
                    >
                      {item.category_4.map((item) => {
                        return (
                          <div
                            key={`${item}_4`}
                            className={
                              item === currentCategory3
                                ? `filter_tabs_children_contents filter_tabs_children_contents_active`
                                : `filter_tabs_children_contents`
                            }
                            onClick={(e) => {
                              e.nativeEvent.preventDefault();
                              onClickCategory3(item);
                            }}
                          >
                            <input
                              type="radio"
                              id={`${item}_4`}
                              name="category_4"
                            />
                            <label htmlFor={`${item}_4`}>{item}</label>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(FilterTabs);
