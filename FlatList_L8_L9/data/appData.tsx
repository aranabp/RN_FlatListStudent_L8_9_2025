 type dataType = {
      id: string; //refer to the unique indentifier
      title: string; //text we will show in list
  }
  //using all caps bc DATA array will not change during its use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];
  //when you are exportingm ore than one item, you do not sue the word default and 
  // put all the itmes you are exporting
  //  in {}
  export { DATA, dataType };
