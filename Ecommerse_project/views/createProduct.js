<html>
  <head>
    <title>Create Product</title>
  </head>
  <body>
    <h1>Create Product</h1>
    <form action="/product/save" method="post">
      <input type="text" name="name" placeholder="Product Name" />
      <input type="number" name="stock" placeholder="Stock" />
      <input type="text" name="brand" placeholder="Brand" />
      <input type="text" name="supplier" placeholder="supplier" />
      <input type="text" name="description" placeholder="description" />
      <input type="text" name="imageUrl" placeholder="imageUrl" />
      <input type="number" name="discount" placeholder="discount" />
      <input type="number" name="status" placeholder="status" />
      <input
        type="text"
        name="shortDescription"
        placeholder="shortDescription"
      />
      <input type="text" name="slug" placeholder="slug" />
      <input type="submit" value="submit" />
    </form>
  </body>
</html>