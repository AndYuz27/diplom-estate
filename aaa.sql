--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: catalog_estate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalog_estate (
    id integer NOT NULL,
    name_object character varying(32) NOT NULL,
    type_object character varying(32) NOT NULL,
    cnt_rooms integer NOT NULL,
    cnt_floors integer NOT NULL,
    address character varying NOT NULL,
    catv_avail boolean NOT NULL,
    security_avail boolean NOT NULL,
    elevator_norm boolean NOT NULL,
    elevator_large boolean NOT NULL,
    sq_meters integer NOT NULL,
    type_building character varying(16) NOT NULL,
    city character varying NOT NULL,
    image character varying[],
    price integer NOT NULL,
    currency character varying(3) NOT NULL,
    who_upload integer NOT NULL,
    desription character varying,
    date_of_upload timestamp without time zone NOT NULL,
    istypebuilding boolean NOT NULL,
    typebuild_room integer NOT NULL
);


ALTER TABLE public.catalog_estate OWNER TO postgres;

--
-- Name: catalog_estate_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.catalog_estate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.catalog_estate_id_seq OWNER TO postgres;

--
-- Name: catalog_estate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.catalog_estate_id_seq OWNED BY public.catalog_estate.id;


--
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    id_city integer NOT NULL,
    city_name character varying NOT NULL,
    region character varying NOT NULL,
    zip_code integer NOT NULL,
    taxation character varying,
    flag_city character varying NOT NULL,
    image_city character varying NOT NULL
);


ALTER TABLE public.city OWNER TO postgres;

--
-- Name: city_id_city_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.city_id_city_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.city_id_city_seq OWNER TO postgres;

--
-- Name: city_id_city_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.city_id_city_seq OWNED BY public.city.id_city;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying NOT NULL,
    surname character varying NOT NULL,
    part_name character varying,
    phone character varying(19) NOT NULL,
    email character varying,
    password character varying NOT NULL,
    type_access integer NOT NULL,
    favorite_est_id integer[],
    ser_pass integer NOT NULL,
    num_pas integer NOT NULL,
    who_get character varying(128) NOT NULL,
    dept_code integer NOT NULL,
    tax_id integer NOT NULL,
    work_or_edu_place_adr character varying
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clients_id_seq OWNER TO postgres;

--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: employes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employes (
    id_emp integer NOT NULL,
    name character varying(32) NOT NULL,
    surname character varying(32) NOT NULL,
    last_name character varying(32),
    email character varying(32) NOT NULL,
    password character varying(255) NOT NULL,
    pass_series character varying(4) NOT NULL,
    pass_num character varying(6) NOT NULL,
    who_get character varying(128) NOT NULL,
    dept_code character varying(6),
    tax_id character varying(12) NOT NULL,
    positionid integer NOT NULL,
    typeaccessid integer NOT NULL,
    phone character varying(20),
    image_profile character varying,
    telegram character varying,
    nick character varying(48)
);


ALTER TABLE public.employes OWNER TO postgres;

--
-- Name: employes_id_emp_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employes_id_emp_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employes_id_emp_seq OWNER TO postgres;

--
-- Name: employes_id_emp_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employes_id_emp_seq OWNED BY public.employes.id_emp;


--
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    id integer NOT NULL,
    id_user integer NOT NULL,
    id_chat integer,
    message character varying NOT NULL,
    link character varying,
    isread boolean
);


ALTER TABLE public.message OWNER TO postgres;

--
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.message_id_seq OWNER TO postgres;

--
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- Name: position; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."position" (
    id integer NOT NULL,
    position_name character varying(64) NOT NULL,
    salary integer NOT NULL
);


ALTER TABLE public."position" OWNER TO postgres;

--
-- Name: position_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.position_id_seq OWNER TO postgres;

--
-- Name: position_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.position_id_seq OWNED BY public."position".id;


--
-- Name: refresh_sessions_emp; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.refresh_sessions_emp (
    id integer NOT NULL,
    user_id integer NOT NULL,
    refresh_token character varying(400) NOT NULL,
    finger_print character varying(32) NOT NULL
);


ALTER TABLE public.refresh_sessions_emp OWNER TO postgres;

--
-- Name: refresh_sessions_emp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.refresh_sessions_emp_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.refresh_sessions_emp_id_seq OWNER TO postgres;

--
-- Name: refresh_sessions_emp_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.refresh_sessions_emp_id_seq OWNED BY public.refresh_sessions_emp.id;


--
-- Name: services_estate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services_estate (
    id integer NOT NULL,
    name character varying(96) NOT NULL,
    description character varying NOT NULL,
    price_from integer NOT NULL,
    props character varying[],
    cons character varying[],
    name_handler character varying,
    image character varying,
    type_service character varying
);


ALTER TABLE public.services_estate OWNER TO postgres;

--
-- Name: services_estate_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.services_estate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.services_estate_id_seq OWNER TO postgres;

--
-- Name: services_estate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.services_estate_id_seq OWNED BY public.services_estate.id;


--
-- Name: type_building; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_building (
    id integer NOT NULL,
    name_building character varying NOT NULL,
    floor_cnt integer NOT NULL,
    elevator_norm boolean NOT NULL,
    elevator_large boolean NOT NULL,
    trash boolean NOT NULL,
    year_of_realise integer NOT NULL,
    place_of_security boolean NOT NULL,
    gas_avail boolean NOT NULL,
    type_wall character varying NOT NULL,
    noise_isolation boolean NOT NULL,
    balcony boolean NOT NULL,
    cnt_flats integer NOT NULL,
    image character varying
);


ALTER TABLE public.type_building OWNER TO postgres;

--
-- Name: type_building_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_building_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.type_building_id_seq OWNER TO postgres;

--
-- Name: type_building_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.type_building_id_seq OWNED BY public.type_building.id;


--
-- Name: typeaccess; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeaccess (
    id_typeaccess integer NOT NULL,
    typeaccess character varying(64) NOT NULL
);


ALTER TABLE public.typeaccess OWNER TO postgres;

--
-- Name: typeaccess_id_typeaccess_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.typeaccess_id_typeaccess_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.typeaccess_id_typeaccess_seq OWNER TO postgres;

--
-- Name: typeaccess_id_typeaccess_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.typeaccess_id_typeaccess_seq OWNED BY public.typeaccess.id_typeaccess;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(200) NOT NULL,
    email character varying(200) NOT NULL,
    password character varying(200) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: zayavlenie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.zayavlenie (
    id integer NOT NULL,
    zayavlenie_na_chto character varying(64) NOT NULL,
    full_name character varying(160) NOT NULL,
    phone character varying(24) NOT NULL,
    address_city character varying NOT NULL,
    address character varying NOT NULL,
    kad_num character varying,
    home character varying,
    field_m2 integer,
    banya_m2 integer,
    statement character varying,
    price integer NOT NULL,
    price_per_sotok integer,
    com_gas character varying,
    adding_info character varying,
    dwell character varying,
    water character varying,
    voltage character varying,
    floors integer NOT NULL,
    floor_flat integer,
    cnt_rooms integer,
    half_balcony_m2 integer,
    living_room_m2 integer,
    kitchen_m2 integer,
    rooms integer[],
    toilet integer,
    bathroom integer,
    coridor integer,
    balcony integer,
    currency character varying(4)
);


ALTER TABLE public.zayavlenie OWNER TO postgres;

--
-- Name: zayavlenie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.zayavlenie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.zayavlenie_id_seq OWNER TO postgres;

--
-- Name: zayavlenie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.zayavlenie_id_seq OWNED BY public.zayavlenie.id;


--
-- Name: catalog_estate id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_estate ALTER COLUMN id SET DEFAULT nextval('public.catalog_estate_id_seq'::regclass);


--
-- Name: city id_city; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city ALTER COLUMN id_city SET DEFAULT nextval('public.city_id_city_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: employes id_emp; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employes ALTER COLUMN id_emp SET DEFAULT nextval('public.employes_id_emp_seq'::regclass);


--
-- Name: message id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- Name: position id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position" ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);


--
-- Name: refresh_sessions_emp id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_sessions_emp ALTER COLUMN id SET DEFAULT nextval('public.refresh_sessions_emp_id_seq'::regclass);


--
-- Name: services_estate id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_estate ALTER COLUMN id SET DEFAULT nextval('public.services_estate_id_seq'::regclass);


--
-- Name: type_building id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_building ALTER COLUMN id SET DEFAULT nextval('public.type_building_id_seq'::regclass);


--
-- Name: typeaccess id_typeaccess; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeaccess ALTER COLUMN id_typeaccess SET DEFAULT nextval('public.typeaccess_id_typeaccess_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: zayavlenie id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zayavlenie ALTER COLUMN id SET DEFAULT nextval('public.zayavlenie_id_seq'::regclass);


--
-- Data for Name: catalog_estate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalog_estate (id, name_object, type_object, cnt_rooms, cnt_floors, address, catv_avail, security_avail, elevator_norm, elevator_large, sq_meters, type_building, city, image, price, currency, who_upload, desription, date_of_upload, istypebuilding, typebuild_room) FROM stdin;
1	3х комн. квартира	квартира	3	5	Черноголовка пр-д Строителей 2, кв. 55	t	f	t	f	32	II-49	Черноголовка	{https://pereplan-one.ru/assets/lib/2019/02/10/seriyaii49-005.jpg,https://domavlad.ru/wp-content/uploads/2021/10/EVKSr7SVAAEOxVv.jpg}	8750000	RUB	1	lorem ipsum dolor sit amet...	2024-01-08 04:05:06	t	3
2	Загородный дом в Макарово	Загородный дом	5	2	г.о. Черноголовка, село Макарово д.22	f	f	f	f	50	инд.	Село Макарово	{https://loftecomarket.ru/wp-content/uploads/4/3/b/43bb13eabca06725f7997be557af3b75.jpeg,https://domavlad.ru/wp-content/uploads/2021/10/EVKSr7SVAAEOxVv.jpg}	14750000	RUB	4	lorem ipsum dolor sit amet...	2024-01-08 04:10:06	f	0
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (id_city, city_name, region, zip_code, taxation, flag_city, image_city) FROM stdin;
1	Черноголовка	Московская область	142432	2.3	https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Chernogolovka_%28Moscow_oblast%29.png	https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Chernogolovka%2C_Moscow_Oblast%2C_Russia%2C_142432_-_panoramio_%287%29.jpg/1920px-Chernogolovka%2C_Moscow_Oblast%2C_Russia%2C_142432_-_panoramio_%287%29.jpg
2	Орехово-Зуево	Московская область	142619	2.3	https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Orekhovo-Zuevo_%28Moscow_oblast%29.png/1280px-Flag_of_Orekhovo-Zuevo_%28Moscow_oblast%29.png	https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/CentralBulv_OZ.jpg/1920px-CentralBulv_OZ.jpg
3	Ногинск	Московская область	142400	2.3	https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Noginsk_%28Moscow_oblast%29.png	https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Noginsk%2C_Moscow_Oblast%2C_Russia_-_panoramio_%28143%29.jpg/1920px-Noginsk%2C_Moscow_Oblast%2C_Russia_-_panoramio_%28143%29.jpg
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, surname, part_name, phone, email, password, type_access, favorite_est_id, ser_pass, num_pas, who_get, dept_code, tax_id, work_or_edu_place_adr) FROM stdin;
\.


--
-- Data for Name: employes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employes (id_emp, name, surname, last_name, email, password, pass_series, pass_num, who_get, dept_code, tax_id, positionid, typeaccessid, phone, image_profile, telegram, nick) FROM stdin;
1	Пётр	Жуков	Андреевич	juke_007@mail.ru	1337300juke	4619	435400	ГУ МВД РОССИИ ПО МОСКОВСКОЙ ОБЛАСТИ	500093	478527860014	4	1	+7(916)755-71-77	https://img.freepik.com/free-photo/portrait-concentrated-serious-sportsman_171337-7771.jpg?t=st=1710021210~exp=1710024810~hmac=18807185d69a6f9b37e1b9aa352a3aa7d3d0213891aa92e52cf3c0435529c0fd&w=1380	\N	juke_peter
4	Кристина	Цветкова	Захарова	cris_cvet@gmail.com	$2b$10$VK3yAxzNxc2xU13CQL1LYuEYSD.Q/55mqsgTlJsi2q3oxK/MQVvAW	4622	458200	ГУ МВД РОССИИ ПО САНКТ-ПЕТЕРБУРГУ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ	780016	478527867854	1	4	+7(925)798-00-70	https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-89269.jpg?t=st=1711361831~exp=1711365431~hmac=c1f59ef702e712dab790b14efa185e464b9ec2a2802ae2da4b201f755048542f&w=1380	\N	cris_flow
6	Виктория	Романова	Витальевна	sinsay-oz@yandex.ru	23051997vic	4517	587897	ТП №1 МО УФМС РОССИИ ПО МОСКОВСКОЙ ОБЛАСТИ В ГОРОДСКОМ ОКРУГЕ ОРЕХОВО-ЗУЕВО	500111	578954235478	4	1	+7(915)878-74-12	https://img.freepik.com/free-photo/lovely-girl-with-ginger-hair-blue-eyes-looking-with-admiration-care-front-leaning-face-hands-daydreaming-standing-white-wall_176420-42905.jpg?t=st=1713084793~exp=1713088393~hmac=84ffe85e682ef8d56f572d82c18d174cf508bfe0d71f9e8b7617e85c239671c9&w=1380	\N	victoriyaRome
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.message (id, id_user, id_chat, message, link, isread) FROM stdin;
\.


--
-- Data for Name: position; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."position" (id, position_name, salary) FROM stdin;
1	Риелтор	55000
2	Консультат	45000
3	Редактор веб-приложения	64000
4	Администратор	55000
\.


--
-- Data for Name: refresh_sessions_emp; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.refresh_sessions_emp (id, user_id, refresh_token, finger_print) FROM stdin;
\.


--
-- Data for Name: services_estate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services_estate (id, name, description, price_from, props, cons, name_handler, image, type_service) FROM stdin;
1	Перепланировка квартиры/дома	Если обыкновенная планировка вам не по душе, то вы можете заказать услугу по перепланировке квартиры или частного дома/дачи	15000	{"Хорошее качество обслуживания","Качественным ремонт","опыт в данной области"}	{"В некоторых местах запрещено производить перепланировку","Одобрения от администрации города/нас. пункта"}	Шишкин Семён \n\t   Григорьевич	https://mebel-complect.ru/wp-content/uploads/d/8/0/d80530caf7397adfc54f383125bca350.jpeg	Ремонт
\.


--
-- Data for Name: type_building; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_building (id, name_building, floor_cnt, elevator_norm, elevator_large, trash, year_of_realise, place_of_security, gas_avail, type_wall, noise_isolation, balcony, cnt_flats, image) FROM stdin;
\.


--
-- Data for Name: typeaccess; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.typeaccess (id_typeaccess, typeaccess) FROM stdin;
1	Администратор
2	Редактор
3	Консультант
4	Риелтор
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password) FROM stdin;
1	andy	aaa@mail.ru	$2b$10$l/w9Ew.e549Ka1UYsgMnlu05WBOlQXhnDIMaLIcEmOmwLg6d6QqUW
\.


--
-- Data for Name: zayavlenie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.zayavlenie (id, zayavlenie_na_chto, full_name, phone, address_city, address, kad_num, home, field_m2, banya_m2, statement, price, price_per_sotok, com_gas, adding_info, dwell, water, voltage, floors, floor_flat, cnt_rooms, half_balcony_m2, living_room_m2, kitchen_m2, rooms, toilet, bathroom, coridor, balcony, currency) FROM stdin;
1	на продажу квартиры	Жуков Пётр Андреевич	+79175555555	Черноголовка	Строителей 2 кв. 113	\N	\N	\N	\N	\N	9512256	346356	имеется	\N	\N	ЦВС	\N	9	2	2	\N	5	1	{2,4}	1	1	1	1	RUB
\.


--
-- Name: catalog_estate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.catalog_estate_id_seq', 2, true);


--
-- Name: city_id_city_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.city_id_city_seq', 3, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, false);


--
-- Name: employes_id_emp_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employes_id_emp_seq', 6, true);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.message_id_seq', 1, false);


--
-- Name: position_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.position_id_seq', 4, true);


--
-- Name: refresh_sessions_emp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.refresh_sessions_emp_id_seq', 1, false);


--
-- Name: services_estate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.services_estate_id_seq', 1, true);


--
-- Name: type_building_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_building_id_seq', 1, false);


--
-- Name: typeaccess_id_typeaccess_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.typeaccess_id_typeaccess_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: zayavlenie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.zayavlenie_id_seq', 1, true);


--
-- Name: catalog_estate catalog_estate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalog_estate
    ADD CONSTRAINT catalog_estate_pkey PRIMARY KEY (id);


--
-- Name: employes chk_pk_id_emp; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employes
    ADD CONSTRAINT chk_pk_id_emp PRIMARY KEY (id_emp);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: employes employes_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employes
    ADD CONSTRAINT employes_email_key UNIQUE (email);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id_user);


--
-- Name: position position_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (id);


--
-- Name: refresh_sessions_emp refresh_sessions_emp_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_sessions_emp
    ADD CONSTRAINT refresh_sessions_emp_pkey PRIMARY KEY (id);


--
-- Name: services_estate services_estate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services_estate
    ADD CONSTRAINT services_estate_pkey PRIMARY KEY (id);


--
-- Name: type_building type_building_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_building
    ADD CONSTRAINT type_building_pkey PRIMARY KEY (id);


--
-- Name: typeaccess typeaccess_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeaccess
    ADD CONSTRAINT typeaccess_pkey PRIMARY KEY (id_typeaccess);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: zayavlenie zayavlenie_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.zayavlenie
    ADD CONSTRAINT zayavlenie_pkey PRIMARY KEY (id);


--
-- Name: employes employes_positionid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employes
    ADD CONSTRAINT employes_positionid_fkey FOREIGN KEY (positionid) REFERENCES public."position"(id);


--
-- Name: employes employes_typeaccessid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employes
    ADD CONSTRAINT employes_typeaccessid_fkey FOREIGN KEY (typeaccessid) REFERENCES public.typeaccess(id_typeaccess);


--
-- Name: refresh_sessions_emp refresh_sessions_emp_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.refresh_sessions_emp
    ADD CONSTRAINT refresh_sessions_emp_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.employes(id_emp) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

