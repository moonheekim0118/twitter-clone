// 로컬 스토리지에 아이템 저장
export const setItem = (key, value) => {
    if (value === null || value === undefined) return;
    const RefinedValue = { id: Date.now(), value: value };
    const exItems = getItem(key);
    exItems.unshift(RefinedValue);
    const toJson = JSON.stringify(exItems);
    localStorage.setItem(key, toJson);
};

// 로컬 스토리지에 있는 아이템 가져오기
export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value === null ? [] : JSON.parse(value);
};

// 로컬 스토리지에 있는 특정 아이템 삭제
export const removeItem = (key, id) => {
    if (id === null || id === undefined) return;
    const exData = getItem(key);
    const result = exData.filter((element) => element.id !== id);
    const toJson = JSON.stringify(result);
    localStorage.setItem(key, toJson);
};
