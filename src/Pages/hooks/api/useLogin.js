import React, { useEffect, useState } from "react";

const useLogin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/api/v1/users/email/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useLogin;
