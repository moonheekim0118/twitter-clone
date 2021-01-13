// 들어오는 length에 따라서 이미지 사이즈 결정해준다.
// ratio는 비율 , height는 이미지의 높이를 결정한다.
export const imageSizing = (length) => {
    switch (length) {
        case 1:
            return [{ ratio: 1, height: 'false' }];
        case 2:
            return [
                { ratio: 2, height: 'false' },
                { ratio: 2, height: 'false' },
            ];
        case 3:
            return [
                { ratio: 2, height: 'false' },
                { ratio: 1, height: 'true' },
                { ratio: 1, height: 'true' },
            ];
        default:
            return [
                { ratio: 1, height: 'true' },
                { ratio: 1, height: 'true' },
                { ratio: 1, height: 'true' },
                { ratio: 1, height: 'true' },
            ];
    }
};
