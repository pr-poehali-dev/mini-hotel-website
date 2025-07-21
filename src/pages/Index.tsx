import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hotel-cream to-hotel-lightCream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-hotel-warmBeige/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-hotel-brown">Уютное Место</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#rooms" className="text-hotel-brown hover:text-hotel-softBrown transition-colors">Номера</a>
              <a href="#services" className="text-hotel-brown hover:text-hotel-softBrown transition-colors">Услуги</a>
              <a href="#gallery" className="text-hotel-brown hover:text-hotel-softBrown transition-colors">Галерея</a>
              <a href="#contact" className="text-hotel-brown hover:text-hotel-softBrown transition-colors">Контакты</a>
            </div>
            <Button className="bg-hotel-warmBeige hover:bg-hotel-softBrown text-white">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-hotel-warmBeige/20 text-hotel-brown border-hotel-warmBeige">
                Мини отель в самом сердце города
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hotel-brown leading-tight">
                Дом вдали от дома
              </h1>
              <p className="text-xl text-hotel-softBrown leading-relaxed">
                Почувствуйте настоящий уют и комфорт в нашем мини отеле. 
                Каждая деталь продумана для вашего идеального отдыха.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-hotel-warmBeige hover:bg-hotel-softBrown text-white text-lg px-8 py-3">
                  <Icon name="Calendar" className="mr-2" />
                  Забронировать сейчас
                </Button>
                <Button variant="outline" size="lg" className="border-hotel-warmBeige text-hotel-brown hover:bg-hotel-warmBeige/10 text-lg px-8 py-3">
                  <Icon name="Phone" className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/60c54db9-a800-4fac-aa29-5c792aa86369.jpg" 
                  alt="Уютный мини отель"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-hotel-brown">4.9</div>
                  <div className="text-sm text-hotel-softBrown">рейтинг</div>
                  <div className="flex text-yellow-400 text-sm mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hotel-brown mb-4">
              Наши номера
            </h2>
            <p className="text-hotel-softBrown text-lg max-w-2xl mx-auto">
              Каждый номер создан с любовью к деталям для вашего максимального комфорта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Стандарт",
                price: "3,500 ₽",
                features: ["1-2 гостя", "Двуспальная кровать", "Ванная комната", "Wi-Fi"]
              },
              {
                title: "Комфорт",
                price: "5,200 ₽", 
                features: ["2-3 гостя", "Мини-кухня", "Гостиная зона", "Wi-Fi"],
                popular: true
              },
              {
                title: "Люкс",
                price: "7,800 ₽",
                features: ["2-4 гостя", "Отдельная спальня", "Джакузи", "Wi-Fi"]
              }
            ].map((room, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${room.popular ? 'ring-2 ring-hotel-warmBeige' : ''}`}>
                <div className="relative">
                  <img 
                    src="/img/78842bd9-9bf6-4e31-9136-59e0a2d34cff.jpg"
                    alt={room.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {room.popular && (
                    <Badge className="absolute top-4 right-4 bg-hotel-warmBeige text-white">
                      Популярный
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-hotel-brown">{room.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-hotel-brown">{room.price}</div>
                      <div className="text-sm text-hotel-softBrown">за ночь</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-hotel-softBrown">
                        <Icon name="Check" className="mr-2 text-hotel-warmBeige" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-hotel-warmBeige hover:bg-hotel-softBrown text-white">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-hotel-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hotel-brown mb-4">
              Наши услуги
            </h2>
            <p className="text-hotel-softBrown text-lg max-w-2xl mx-auto">
              Всё необходимое для комфортного пребывания
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Wifi",
                title: "Бесплатный Wi-Fi",
                description: "Высокоскоростной интернет во всех номерах"
              },
              {
                icon: "Car",
                title: "Парковка",
                description: "Бесплатная парковка для всех гостей"
              },
              {
                icon: "Coffee",
                title: "Завтрак",
                description: "Домашний завтрак каждое утро"
              },
              {
                icon: "Shield",
                title: "24/7 Охрана",
                description: "Круглосуточная безопасность"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-hotel-warmBeige/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hotel-warmBeige/30 transition-colors">
                    <Icon name={service.icon} className="text-hotel-brown" size={24} />
                  </div>
                  <h3 className="font-semibold text-hotel-brown mb-2">{service.title}</h3>
                  <p className="text-hotel-softBrown text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hotel-brown mb-4">
              Галерея
            </h2>
            <p className="text-hotel-softBrown text-lg max-w-2xl mx-auto">
              Взгляните на атмосферу нашего отеля
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <img 
                  src={index % 3 === 0 ? "/img/4ef5acf0-994a-4ce0-acc9-69a12d554aa1.jpg" : 
                       index % 3 === 1 ? "/img/78842bd9-9bf6-4e31-9136-59e0a2d34cff.jpg" : 
                       "/img/60c54db9-a800-4fac-aa29-5c792aa86369.jpg"}
                  alt={`Фото отеля ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-16 bg-hotel-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-hotel-brown mb-6">
                Свяжитесь с нами
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="MapPin" className="text-hotel-warmBeige mr-3" />
                  <span className="text-hotel-softBrown">ул. Уютная, 15, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="text-hotel-warmBeige mr-3" />
                  <span className="text-hotel-softBrown">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-hotel-warmBeige mr-3" />
                  <span className="text-hotel-softBrown">info@uytnoye-mesto.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="text-hotel-warmBeige mr-3" />
                  <span className="text-hotel-softBrown">Круглосуточно</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-hotel-brown">Быстрое бронирование</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-hotel-brown mb-1">Заезд</label>
                      <Input type="date" className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hotel-brown mb-1">Выезд</label>
                      <Input type="date" className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hotel-brown mb-1">Количество гостей</label>
                    <Input type="number" min="1" max="6" defaultValue="2" className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hotel-brown mb-1">Имя</label>
                    <Input placeholder="Ваше имя" className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hotel-brown mb-1">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hotel-brown mb-1">Комментарий</label>
                    <Textarea placeholder="Особые пожелания..." className="border-hotel-warmBeige/30 focus:border-hotel-warmBeige" rows={3} />
                  </div>
                  <Button className="w-full bg-hotel-warmBeige hover:bg-hotel-softBrown text-white text-lg py-3">
                    <Icon name="Calendar" className="mr-2" />
                    Забронировать номер
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hotel-brown text-hotel-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Уютное Место</h3>
              <p className="text-hotel-cream/80">Мини отель с домашней атмосферой в самом сердце города.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Номера</h4>
              <ul className="space-y-2 text-hotel-cream/80">
                <li>Стандарт</li>
                <li>Комфорт</li>
                <li>Люкс</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-hotel-cream/80">
                <li>Бесплатный Wi-Fi</li>
                <li>Завтрак</li>
                <li>Парковка</li>
                <li>24/7 Охрана</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-hotel-cream/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@uytnoye-mesto.ru</li>
                <li>ул. Уютная, 15, Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-hotel-cream/20 mt-8 pt-8 text-center text-hotel-cream/60">
            <p>&copy; 2024 Уютное Место. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;