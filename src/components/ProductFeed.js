import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../api"

export const ProductFeed = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);

	const loadProducts = async () => {
		try {
			const response = await getAllProducts();
			if (response.status == 200) {
				setProducts(response.data)
			}
			console.log(response, "sucess");
		} catch (error) {
			console.log(error, "error");
		}
	}

	useEffect(() => {
		loadProducts()
	}, [])

	const handleLogout = () => {
		localStorage.clear();
		window.location.reload()
	}

	const addProductToCart = (product_id) => {
	}

	return (
		<>
			<h1>Shopping App</h1>
			<button className="btn btn-danger" onClick={handleLogout}>Logout</button>

			<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
				{
					products.map((product, index) => {
						const imageURL = product.images && product.images.length > 0 ? product.images[0] : '';

						return (
							<div className="card" style={{ width: "18rem", height: 500, margin: 10 }}>
								<img className="card-img-top" src={imageURL} alt="Card image cap" style={{ height: 200 }} />
								<div className="card-body">
									<h5 className="card-title">{product.title}</h5>
									<p className="card-text">{product.description}</p>
									<p className="card-text">Price - {product.price}</p>
									<button className="btn btn-primary" onClick={() => addProductToCart(product.id)}>Add to Cart</button>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}