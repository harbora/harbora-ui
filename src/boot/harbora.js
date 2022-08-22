import { boot } from 'quasar/wrappers';

const deviceInfo = {
    default: () => {
        return {
            name: "Harbora Device",
            address: "0x0000000001",
            type: "unknown"
        }
    },
    get: async () => {
        return {
            name: "Harbora Device",
            address: "0x0000000001",
            type: "mobile"
        }
    }
}

const harbora = {
    deviceInfo,
};

export default boot(({ app }) => {
    app.config.globalProperties.$harbora = harbora;
})

export { harbora }

