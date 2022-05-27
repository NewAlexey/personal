import { useEffect, useState } from "react";

export const useMount = (): boolean => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => setIsMount(true), []);

  return isMount;
};
