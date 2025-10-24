const getStorageData = () => {

    const storedDataSTR = localStorage.getItem("readList");

    if (storedDataSTR) {
        const arryStore = JSON.parse(storedDataSTR);
        return arryStore;
    } else {
        return [];
    }
}


const addToStorageDB = (paramsID) => {
    const storedData = getStorageData();
    if (storedData.includes(paramsID)) {
        alert("Book is already read")
    } else {
        storedData.push(paramsID)
        const data = JSON.stringify(storedData)
        localStorage.setItem("readList", data)
    }

}

export { addToStorageDB };

