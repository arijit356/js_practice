if (temperature > 30) {
  weather = "hot";
} else {
  weather = "cool";
}

if (isMember) {
  discount = 10;
} else {
  discount = 0;
}

if (day === "Saturday" || day === "Sunday") {
  isWeekend = true;
} else {
  isWeekend = false;
}



if (cartItems.length === 0) {
  status = "empty";
} else {
  status = "ready";
}

if (marks >= 90) {
  grade = "A";
} else {
  grade = "B";
}

if (userType === "admin") {
  baseAccess = "all";
  canDelete = true;
} else {
  baseAccess = "limited";
  canDelete = false;
}

if (isPremiumUser) {
  discount = basePrice * 0.2;
  finalPrice = basePrice - discount;
} else {
  discount = basePrice * 0.05;
  finalPrice = basePrice - discount;
}


if (speed > 100) {
  message = "Too fast";
  penalty = 200;
} else {
  message = "OK";
  penalty = 0;
}


if (role === "teacher") {
  dashboard = "gradebook";
  permissions = "view/edit/grade";
} else {
  dashboard = "courses";
  permissions = "view";
}

if (age >= 65) {
  category = "senior";
  ticketPrice = 5;
} else {
  category = "adult";
  ticketPrice = 10;
}
