import { useCallback } from "react";

export const useMessage = (text) => {
  return useCallback(text => {
    if (text){
      alert(text);
    }
  }, []);
};
