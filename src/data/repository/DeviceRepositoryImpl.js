import { DeviceRepository } from './DeviceRepository'

export class DeviceRepositoryImpl extends DeviceRepository {

  async fetchDevices() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 'd1', name: '设备A', productId: 'p1' },
      { id: 'd2', name: '设备B', productId: 'p2' },
    ]
  }

  async fetchProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve([
            { id: 'p1', name: '产品1', description: '产品1描述' },
            { id: 'p2', name: '产品2', description: '产品2描述' },
          ]);
        } catch (error) {
          reject(error);
        }
      }, 500)
    });
  }
}
