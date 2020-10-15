FROM php:7.4-apache
MAINTAINER GeorgeMelroyDSouza <george@buddi.co.uk>

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /var/www

EXPOSE 80/tcp
EXPOSE 80/udp

RUN a2enmod rewrite
