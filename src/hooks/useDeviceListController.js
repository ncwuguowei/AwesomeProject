import { useEffect, useState } from "react";
// 本意是想支持能单元测试hook/fake测试能力的repository实现，依赖全局注入
import { DeviceRepositoryImpl } from "../data/repository/DeviceRepositoryImpl";

export function useDeviceListController() {
  const [deviceProducts, setDeviceProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const deviceRepo = new DeviceRepositoryImpl();

  async function loadData() {
    setLoading(true);
    try {
      const [devicesData, productsData] = await Promise.all([deviceRepo.fetchDevices(), deviceRepo.fetchProducts()]);

      const productMap = new Map(productsData.map(product => [product.id, product]));
      const devicesWithProduct = devicesData.map(device => ({
        id: device.id,
        name: device.name,
        product: productMap.get(device.productId) || null
      }));

      setDeviceProducts(devicesWithProduct);
    } catch (error) {
      console.error(`loadData error ${JSON.stringify(error)}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return {
    deviceProducts,
    loading
  };
}