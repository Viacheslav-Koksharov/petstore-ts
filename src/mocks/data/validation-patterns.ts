const patterns = {
    NAME: /^\S+ \S+$/,
    EMAIL:
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
    PASSWORD: 7
};

export { patterns };