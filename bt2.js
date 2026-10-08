const devices = [{
        id: "DEV_001",
        name: "Điều hòa",
        room: "Phòng khách",
        powerWatts: 1200,
        isActive: true
    },
    {
        id: "DEV_002",
        name: "Đèn ngủ",
        room: "Phòng ngủ",
        powerWatts: 20,
        isActive: false
    },
    {
        id: "DEV_003",
        name: "Tivi",
        room: "Phòng khách",
        powerWatts: 150,
        isActive: true
    }
];
const validateDevice = (newDev) => {
    if (newDev.name === undefined || newDev.name === "") {
        return false;
    }
    if (newDev.room === undefined || newDev.room === "") {
        return false;
    }
    if (newDev.powerWatts <= 0) {
        return false;
    }
    return true;
};
const createDevice = (list, newDev) => {
    if (!validateDevice(newDev)) {
        return false;
    }
    const newId = "DEV_" + String(list.length + 1).padStart(3, "0");
    const device = {
        id: newId,
        name: newDev.name,
        room: newDev.room,
        powerWatts: newDev.powerWatts,
        isActive: newDev.isActive
    };
    list.push(device);
    return true;
};
const readDevicesByRoom = (list, roomName) => {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].room === roomName) {
            result.push(list[i]);
        }
    }
    return result;
};
const updateDevice = (list, id, updateData) => {
    let targetDevice = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            targetDevice = list[i];
            break;
        }
    }
    if (targetDevice === null) {
        return false;
    }
    if (updateData.name !== undefined) {
        targetDevice.name = updateData.name;
    }
    if (updateData.room !== undefined) {
        targetDevice.room = updateData.room;
    }
    if (updateData.powerWatts !== undefined) {
        targetDevice.powerWatts = updateData.powerWatts;
    }
    if (updateData.isActive !== undefined) {
        targetDevice.isActive = updateData.isActive;
    }
    return true;
};
const deleteDevice = (list, id) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
            return true;
        }
    }
    return false;
};
console.log("===== DANH SÁCH BAN ĐẦU =====");
console.log(devices);
console.log("===== CREATE =====");
const newDevice = {
    name: "Quạt thông minh",
    room: "Phòng ngủ",
    powerWatts: 60,
    isActive: false
};
console.log("Kết quả thêm thiết bị:", createDevice(devices, newDevice));
console.log(devices);
console.log("===== READ THEO PHÒNG =====");
const bedroomDevices = readDevicesByRoom(devices, "Phòng ngủ");
console.log(bedroomDevices);
console.log("===== UPDATE =====");
console.log(
    "Kết quả cập nhật:",
    updateDevice(devices, "DEV_001", {
        isActive: false,
        powerWatts: 0
    })
);
console.log(devices);
console.log("===== DELETE =====");
console.log("Kết quả xóa:", deleteDevice(devices, "DEV_002"));
console.log(devices);
console.log("===== KIỂM TRA ID KHÔNG TỒN TẠI =====");
console.log(
    "Kết quả cập nhật:",
    updateDevice(devices, "DEV_999", {
        isActive: true
    })
);
console.log(
    "Kết quả xóa:",
    deleteDevice(devices, "DEV_999")
);