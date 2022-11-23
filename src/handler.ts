export async function hello (event) {
  return { statusCode: 200, body: JSON.stringify({ message: 'hello world2' }) };
}
