// class Result {
//
// 	public static int superDigit(String n, int k) {
// 	// Does the string first
// 	int sum = recursiveFunction(n);
// 	// By multiplying it, by k times separately, we don't have to worry about going over string bounds
// 	return recursiveFunction(Integer.toString(sum * k));
// }
//
// public static int recursiveFunction(String n){
// 	//base case
// 	if (n.length() == 1){
// 		return Integer.valueOf(n);
// 	}
//
// 	//recursive case
// 	long sum = 0;
// 	for (int i = 0; i < n.length(); i++) {
// 		int c = n.charAt(i);
// 		sum += Character.getNumericValue(c);
// 	}
// 	return recursiveFunction(Long.toString(sum));
// }
//
// }