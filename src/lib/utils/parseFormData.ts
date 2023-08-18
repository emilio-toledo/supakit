const parseFormData = <T>(formData: FormData): T => {
	const data: Record<string, string> = {};
	for (const [key, value] of formData.entries()) {
		data[key] = value.toString();
	}
	return data as T;
};

export default parseFormData;
