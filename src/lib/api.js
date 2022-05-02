const FIREBASE_DOMAIN = "https://hostlify2-default-rtdb.firebaseio.com/";

export async function getAllTiffins() {
  const response = await fetch(`${FIREBASE_DOMAIN}/food.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could Not fetch Tiffins");
  }

  const transformedTiffins = [];

  for (const key in data) {
    const tiffinObj = {
      id: key,
      ...data[key],
    };

    transformedTiffins.push(tiffinObj);
  }

  return transformedTiffins;
}

export async function getAllHostels() {
  const response = await fetch(`${FIREBASE_DOMAIN}/hostel.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could Not fetch hostels");
  }

  const transformedHostels = [];

  for (const key in data) {
    const hostelObj = {
      id: key,
      ...data[key],
    };

    transformedHostels.push(hostelObj);
  }

  return transformedHostels;
}

export async function getSingleTiffin(foodId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/food/${foodId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch tiffin.");
  }

  const loadedTiffin = {
    id: foodId,
    ...data,
  };

  return loadedTiffin;
}

export async function getSingleHostel(hostelId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/hostel/${hostelId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch hostel.");
  }

  const loadedHostel = {
    id: hostelId,
    ...data,
  };

  return loadedHostel;
}

export async function addTiffin(tiffinData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/food.json`, {
    method: "POST",
    body: JSON.stringify(tiffinData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addHostel(hostelData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/hostel.json`, {
    method: "POST",
    body: JSON.stringify(hostelData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create hostel.");
  }

  return null;
}

export async function addTiffinReview(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/tiffin-reviews/${requestData.foodId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add review.");
  }

  return { reviewId: data.name };
}

export async function addHostelReview(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/hostel-reviews/${requestData.hostelId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add review.");
  }

  return { reviewId: data.name };
}

export async function getAllTiffinReviews(foodId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/tiffin-reviews/${foodId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get reviews.");
  }

  const transformedReviews = [];

  for (const key in data) {
    const reviewObj = {
      id: key,
      ...data[key],
    };
    transformedReviews.push(reviewObj);
  }
  return transformedReviews;
}

export async function getAllHostelReviews(hostelId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/hostel-reviews/${hostelId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get reviews.");
  }

  const transformedReviews = [];

  for (const key in data) {
    const reviewObj = {
      id: key,
      ...data[key],
    };
    transformedReviews.push(reviewObj);
  }
  return transformedReviews;
}

export async function addUser(userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/${userData.userId}.json`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add user.");
  }

  return null;
}

export async function getUserData(userId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get user data.");
  }

  const userData = {
    id: userId,
    ...data,
  };

  return userData;
}
