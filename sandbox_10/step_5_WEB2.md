# Шаг 5

## Файл html

```html
<!-- BEGIN TODO -->

<section class="price">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-12 col-xl-12">
				<!-- Черная шапка -->
				<div class="head_black_content">
					<h4>Цены</h4>
					<span></span>
					<p class="addit_info">Цены указаны за СТАНДАРТНЫЙ сайт и являются приблизительными</br>
						Посчитать точную стоимость вашего проекта вы можете позвонив нам или оставив заявку
						ниже. ^_^</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 col-lg-3 col-xl-3 col-6">
				<div class="price-content">
					<div class="price-content-head">
						<h5>от 7 000 р.</h5>
						<h4>ЛЕНДИНГ</h4>
						<P>Одностраничный сайт для продукта</P>
					</div>
					<div class="price-content-body">
						<p><span>8</span> Блоков</p>
						<p><span>1</span> Товар или услуга</p>
						<p><span>3</span> Правки</p>
						<p><span>200+</span> Клиентов в месяц</p>
						<a href="#" class="order">ЗАКАЗАТЬ</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-lg-3 col-xl-3 col-6">
				<div class="price-content">
					<div class="price-content-head">
						<h5>от 13 000 р.</h5>
						<h4>ВИЗИТКА</h4>
						<P>Презентация компании и ее товара</P>
					</div>
					<div class="price-content-body">
						<p><span>5</span> Страниц</p>
						<p><span>5</span> Суб Страниц</p>
						<p><span>5</span> Правок</p>
						<p><span>500+</span> Клиентов в месяц</p>
						<a href="#" class="order">ЗАКАЗАТЬ</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-lg-3 col-xl-3 col-6">
				<div class="price-content">
					<div class="price-content-head">
						<h5>от 20 000 р.</h5>
						<h4>КАТАЛОГ</h4>
						<P>Демонстрация товаров</P>
					</div>
					<div class="price-content-body">
						<p><span>15</span> Страниц</p>
						<p><span>50</span> Товаров</p>
						<p><span>10</span> Правок</p>
						<p><span>700+</span> Клиентов в месяц</p>
						<a href="#" class="order">ЗАКАЗАТЬ</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-lg-3 col-xl-3 col-6">
				<div class="price-content">
					<div class="price-content-head">
						<h5>от 35 000 р.</h5>
						<h4>ИНТЕРНЕТ-МАГАЗИН</h4>
						<P>Полный цикл покупки в интернете</P>
					</div>
					<div class="price-content-body">
						<p><span>20</span> Страниц</p>
						<p><span>100</span> Товаров</p>
						<p><span>10+</span> Правок</p>
						<p><span>1300+</span> Клиентов в месяц</p>
						<a href="#" class="order">ЗАКАЗАТЬ</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- END TODO -->
```


# Файл CSS

```css
/* BEGIN TODO */

.price {
    background-color: #171f23;
    text-align: center;
    color: #f6f6f6;
    padding: 60px 0;
    display: block;
}

.addit_info {
    margin: 20px 0;
}

/* Голова блока цен */
.price-content-head {
    background: #0e1316;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 40px 0 30px;
}


.price-content-head h4 {
    padding-top: 6px;
    font-size: 24px;
}

.price-content-head p {
    margin-top: 25px;
    padding: 0 25px;
    font-size: 14px;
}

/* Тело для блока цен */
.price-content-body {
    background: #1f282c;
    padding: 45px 0 40px;
    letter-spacing: 1px;
    font-weight: 300;
}

.price-content-body p {
    font-size: 15px;
    padding-bottom: 20px;
    color: #fff;
}

/* Стиль для цифр */
.price-content-body p span {
    font-size: 14px;
    font-weight: 700;
    margin-right: 2px;
}

/* Стиль для кнопки "заказать" */
.price-content-body a {
    background: #f4511e;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    padding: 10px 30px;
}

.price-content {
    margin: 5% 0;
    width: 110%;
}

.price-content:hover {
    border: 1px solid #f4511e;
}

.price-content:hover .price-content-body>p>span {
    color: #f4511e;
}

/* END TODO */
```
