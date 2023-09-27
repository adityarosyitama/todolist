import axios from 'axios';
import {BASE_URL} from './url';

const API = async (
  url,
  options = {
    method: 'GET',
    body: {},
    head: {},
  },
) => {
  const request = {
    baseURL: BASE_URL,
    method: options.method,
    timeout: 10000,
    url,
    headers: options.head,
    responseType: 'json',
  };
  if (
    request.method === 'POST' ||
    request.method === 'PUT' ||
    request.method === 'DELETE' ||
    request.method === 'PATCH'
  )
    request.data = options.body;

  const res = await axios(request);

  if (res.status === 200) {
    return res.data;
  } else {
    return res;
  }
};

export default {
  postDataLogin: async params => {
    return API(`api/login/v2`, {
      method: 'POST',
      body: params,
      head: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  postDataToken: async params => {
    const data = {
      otp_request_token: params,
      otp_code: '91010',
    };
    return API(`api/otp`, {
      method: 'POST',
      body: data,
      head: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  postReadNotification: async (params, id) => {
    return API(`api/notifications/${id}/read`, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getCategory: async params => {
    return API(`api/categories/root`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getSubCategory: async (params, id) => {
    return API(`api/categories/${id}/childs`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getBrand: async params => {
    return API(`api/brands`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getLastSeen: async params => {
    return API(`api/products/seen`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getNotification: async params => {
    return API(`api/notifications`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getSection: async params => {
    return API(`api/sections`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getCategoryHome: async (params, id) => {
    return API(`api/sections/${id}/items`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  getAllBrand: async params => {
    return API(`api/brands/all`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  show: async (params, id) => {
    return API(`api/promos/${id}`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${params}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
  // Get product
  getProduct: async (id, TOKEN) => {
    const url = `${BASE_URL}/api/products/${id}`;

    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  //get search product
  getSearchProduct: async (name, page, TOKEN) => {
    const apage = page === undefined ? "" : `&page=${page}`
    const url = `${BASE_URL}/api/products?keywords=${name}${apage}`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  detail: async TOKEN => {
    const url = `${BASE_URL}/api/promos/192/products`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  brands: async TOKEN => {
    const url = `${BASE_URL}/api/promos/brands`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  brands: async TOKEN => {
    const url = `${BASE_URL}/api/promos/brands`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getLevel: async TOKEN => {
    const url = `${BASE_URL}/api/loyalty/level`;

    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUser: async TOKEN => {
    const url = `${BASE_URL}/api/me`;

    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getHistoryPointProfile: async TOKEN => {
    const url = `${BASE_URL}/api/loyalty/point/history`;

    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getVoucher: async TOKEN => {
    const url = `${BASE_URL}/api/loyalty/voucher`;

    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  getRiwayat: async TOKEN => {
    const url = `${BASE_URL}api/transactions`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getItemList: async (TOKEN, idCek, cek) => {
    const id = idCek === undefined || idCek === '' ? '' : idCek;
    const cekbrandcat =
      cek === 'CATEGORY'
        ? `/api/products?category_id=`
        : cek === 'BRAND'
        ? `/api/products?brand_id=`
        : '/products?order=newest&promo=false';
    const url = `${BASE_URL}${cekbrandcat}${id}`;
    try {
      const response = await API(url, {
        method: 'GET',
        head: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  getCart: async TOKEN => {
    return API(`api/carts`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  },
};
