"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  Search,
  ShoppingBag,
  Tag,
  FileText,
  Printer,
  Truck,
  Plus,
  Minus,
  X,
  Check,
  LayoutGrid,
  Armchair,
  ReceiptText,
  FileBarChart,
} from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { cn } from "./cn";
import { MacWindow } from "./MacWindow";

const CURRENCY = "ج.م";

const CATEGORIES = [
  { id: 1, name: "مشروبات ساخنة" },
  { id: 2, name: "عصائر" },
  { id: 3, name: "حلويات" },
  { id: 4, name: "وجبات" },
];

const MENU = [
  {
    id: 1,
    name: "إسبريسو",
    price: 30,
    category_name: "مشروبات ساخنة",
    category_id: 1,
  },
  {
    id: 2,
    name: "لاتيه",
    price: 45,
    category_name: "مشروبات ساخنة",
    category_id: 1,
  },
  {
    id: 3,
    name: "كابتشينو",
    price: 40,
    category_name: "مشروبات ساخنة",
    category_id: 1,
  },
  {
    id: 4,
    name: "موكا",
    price: 55,
    category_name: "مشروبات ساخنة",
    category_id: 1,
  },
  {
    id: 5,
    name: "عصير برتقال",
    price: 35,
    category_name: "عصائر",
    category_id: 2,
  },
  {
    id: 6,
    name: "عصير مانجو",
    price: 45,
    category_name: "عصائر",
    category_id: 2,
  },
  {
    id: 7,
    name: "عصير فراولة",
    price: 40,
    category_name: "عصائر",
    category_id: 2,
  },
  {
    id: 8,
    name: "كريب نوتيلا",
    price: 60,
    category_name: "حلويات",
    category_id: 3,
  },
  {
    id: 9,
    name: "تشيز كيك",
    price: 70,
    category_name: "حلويات",
    category_id: 3,
  },
  {
    id: 10,
    name: "كرواسون",
    price: 40,
    category_name: "وجبات",
    category_id: 4,
  },
  {
    id: 11,
    name: "ساندويتش جبنة",
    price: 50,
    category_name: "وجبات",
    category_id: 4,
  },
];

const MODIFIERS = [
  { id: 1, name: "سكر زيادة", price: 5 },
  { id: 2, name: "بدون حليب", price: 0 },
  { id: 3, name: "حليب شوفان", price: 10 },
  { id: 4, name: "إكسترا شوت", price: 15 },
];

const TAX_RATE = 14;

const TABLES_INIT = [
  { id: 1, name: "طاولة 1", status: "occupied" },
  { id: 2, name: "طاولة 2", status: "free" },
  { id: 3, name: "طاولة 3", status: "occupied" },
  { id: 4, name: "طاولة 4", status: "free" },
  { id: 5, name: "طاولة 5", status: "free" },
  { id: 6, name: "طاولة 6", status: "occupied" },
];

function MenuItemCard({ item, onItemClick }) {
  return (
    <button
      onClick={() => onItemClick(item)}
      className="group flex flex-col items-start p-4 bg-card border rounded-xl text-right transition-all shadow-sm overflow-hidden relative h-full min-h-30 border-border hover:border-primary/50 hover:bg-accent active:scale-95"
    >
      <div className="flex flex-col flex-1 w-full text-right">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors text-foreground line-clamp-2">
          {item.name}
        </h3>
        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md w-fit mb-auto">
          {item.category_name}
        </span>
      </div>
      <div className="flex items-center justify-between w-full mt-4 pt-3 border-t border-border/50">
        <div className="text-primary font-bold text-sm">
          {item.price} {CURRENCY}
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <Plus className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
}

/* ---- Real CategoryBar (replicates app) ---- */
function CategoryBar({ categories, activeCategoryId, onSelectCategory }) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 mb-2 shrink-0 hide-scrollbar">
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          "whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all",
          activeCategoryId === null
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-card text-muted-foreground hover:bg-accent border border-border",
        )}
      >
        الكل
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            "whitespace-nowrap px-6 py-2.5 rounded-xl font-medium transition-all",
            activeCategoryId === category.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card text-muted-foreground hover:bg-accent border border-border",
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

/* ---- Real CartItem (replicates app) ---- */
function CartItemComponent({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col p-4 border-b border-border/50 bg-card hover:bg-accent/30 transition-colors animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-[0.95rem]">
            {item.name}
          </h4>
          {item.modifiers.length > 0 && (
            <div className="text-xs text-muted-foreground mt-1">
              {item.modifiers.map((m) => m.name).join("، ")}
            </div>
          )}
          {item.note && (
            <div className="text-xs italic text-primary/80 mt-1">
              ملاحظة: {item.note}
            </div>
          )}
        </div>
        <div className="text-left font-bold text-primary">
          {item.totalPrice} {CURRENCY}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center bg-muted/50 rounded-lg p-1 border border-border/50">
          <button
            onClick={() => onUpdateQuantity(item.cartId, 1)}
            className="w-7 h-7 flex items-center justify-center rounded-md transition-all shadow-sm hover:bg-background text-foreground"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-semibold text-sm">
            {item.quantity}
          </span>
          <button
            onClick={() => onUpdateQuantity(item.cartId, -1)}
            className="w-7 h-7 flex items-center justify-center rounded-md transition-all shadow-sm hover:bg-background text-foreground"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.cartId)}
          className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ---- Real thermal receipt (faithful replica of app ReceiptModal) ---- */
function ThermalReceipt({ z = false }) {
  return (
    <div
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
      className="w-full max-w-110 bg-white text-black p-7 font-bold rounded-sm"
    >
      {/* header */}
      <div className="flex flex-col items-center justify-center mb-6 pb-2 gap-2 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          alt="مقهى"
          className="mb-2 h-28 w-44 object-contain"
          style={{ width: "180px", height: "90px" }}
        />
        <h2 className="text-4xl font-black mb-2">مقهي</h2>
        {!z && (
          <p className="text-xl text-center font-bold mb-2">أهلاً وسهلاً</p>
        )}
        <div className="flex gap-4 mt-1">
          <p className="text-lg text-center" dir="ltr">
            01123593773
          </p>
          <p className="text-lg text-center">شارع النصر، القاهرة</p>
        </div>
        <p className="text-lg text-center mt-2">
          الرقم الضريبي: <span dir="ltr">123-456-789</span>
        </p>
        {!z && (
          <div className="flex flex-col gap-1 text-xl text-left">
            <p>{new Date().toLocaleDateString("ar-EG")}</p>
            <p className="font-bold">
              {new Date().toLocaleTimeString("ar-EG", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}
      </div>

      <div
        style={{
          width: "100%",
          borderBottom: "2px dashed #000",
          margin: "5px 0",
        }}
      />

      {!z ? (
        <table className="w-full text-xl mb-8">
          <thead>
            <tr>
              <th
                className="py-3 font-black text-2xl text-right"
                style={{ borderBottom: "4px solid #000" }}
              >
                الصنف
              </th>
              <th
                className="text-center py-3 font-black text-2xl w-14"
                style={{ borderBottom: "4px solid #000" }}
              >
                ك
              </th>
              <th
                className="py-3 font-black text-2xl text-left w-24"
                style={{ borderBottom: "4px solid #000" }}
              >
                السعر
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="py-4 font-bold text-xl leading-snug"
                style={{ borderBottom: "2px dashed #000" }}
              >
                لاتيه
                <div className="text-base font-normal mt-2">
                  حليب شوفان + إكسترا شوت
                </div>
              </td>
              <td
                className="text-center py-4 font-black text-xl"
                style={{ borderBottom: "2px dashed #000" }}
              >
                2
              </td>
              <td
                className="py-4 font-bold text-xl text-left"
                style={{ borderBottom: "2px dashed #000" }}
              >
                100.00
              </td>
            </tr>
            <tr>
              <td
                className="py-4 font-bold text-xl"
                style={{ borderBottom: "2px dashed #000" }}
              >
                كريب نوتيلا
              </td>
              <td
                className="text-center py-4 font-black text-xl"
                style={{ borderBottom: "2px dashed #000" }}
              >
                1
              </td>
              <td
                className="py-4 font-bold text-xl text-left"
                style={{ borderBottom: "2px dashed #000" }}
              >
                60.00
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col gap-2 text-xl font-bold">
          <div className="flex justify-between">
            <span>بداية الوردية</span>
            <span>08:00</span>
          </div>
          <div className="flex justify-between">
            <span>نهاية الوردية</span>
            <span>16:00</span>
          </div>
          <div
            className="flex justify-between"
            style={{ borderTop: "2px dashed #000", paddingTop: 4 }}
          >
            <span>عدد الطلبات</span>
            <span>42</span>
          </div>
          <div className="flex justify-between font-black">
            <span>الإيراد الإجمالي</span>
            <span>4,850.00</span>
          </div>
        </div>
      )}

      {!z ? (
        <div className="pt-1 flex flex-col gap-2 text-xl font-bold">
          <div className="flex justify-between">
            <span>المجموع:</span>
            <span>160.00 {CURRENCY}</span>
          </div>
          <div className="flex justify-between">
            <span>الضريبة ({TAX_RATE}%):</span>
            <span>+22.40 {CURRENCY}</span>
          </div>
          <div
            className="flex justify-between text-3xl font-black mt-6 pt-6"
            style={{ borderTop: "4px solid #000" }}
          >
            <span>الإجمالي:</span>
            <span>182.40 {CURRENCY}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span>نقدي</span>
            <span>200.00</span>
          </div>
          <div className="flex justify-between">
            <span>الباقي</span>
            <span>17.60</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-xl font-bold">
          <div className="flex justify-between">
            <span>نقدي</span>
            <span>2,100.00</span>
          </div>
          <div className="flex justify-between">
            <span>بطاقة</span>
            <span>1,750.00</span>
          </div>
          <div className="flex justify-between">
            <span>محفظة</span>
            <span>1,000.00</span>
          </div>
          <div
            className="flex justify-between"
            style={{ borderTop: "2px dashed #000", paddingTop: 4 }}
          >
            <span>المتوقع بالدرج</span>
            <span>2,200.00</span>
          </div>
          <div className="flex justify-between">
            <span>الفعلي</span>
            <span>2,195.00</span>
          </div>
          <div className="flex justify-between font-black">
            <span>العجز</span>
            <span>5.00</span>
          </div>
        </div>
      )}

      {!z && (
        <div className="mt-6 text-center pt-2 pb-2">
          <p className="text-2xl text-center font-bold mb-2">
            {z ? "" : "شكراً لطلبك"}
          </p>
        </div>
      )}
    </div>
  );
}

export function InteractiveDemo() {
  const [view, setView] = useState("home");
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [activeTable, setActiveTable] = useState(null);
  const [modItem, setModItem] = useState(null);
  const [tables, setTables] = useState(TABLES_INIT);
  const [isDelivery, setIsDelivery] = useState(false);
  const [orderNote, setOrderNote] = useState("");
  const [discount, setDiscount] = useState({ type: "none", value: 0 });
  const [showDiscount, setShowDiscount] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const idRef = useRef(0);
  const makeId = () => ++idRef.current;

  const buildCartItem = (item, modifiers = [], note = "") => {
    const modTotal = modifiers.reduce((s, m) => s + m.price, 0);
    const unit = item.price + modTotal;
    const quantity = 1;
    return {
      cartId: makeId(),
      id: item.id,
      name: item.name,
      price: item.price,
      modifiers,
      note,
      quantity,
      unitPrice: unit,
      totalPrice: unit * quantity,
    };
  };

  const addPlain = (item) => {
    setCart((prev) => {
      const found = prev.find(
        (c) => c.name === item.name && c.modifiers.length === 0 && !c.note,
      );
      if (found) {
        return prev.map((c) =>
          c.cartId === found.cartId
            ? {
                ...c,
                quantity: c.quantity + 1,
                totalPrice: (c.quantity + 1) * c.unitPrice,
              }
            : c,
        );
      }
      return [...prev, buildCartItem(item)];
    });
  };

  const confirmModifier = (modifiers, note) => {
    if (modItem) {
      setCart((prev) => [...prev, buildCartItem(modItem, modifiers, note)]);
      setModItem(null);
    }
  };

  const updateQuantity = (cartId, delta) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.cartId === cartId
            ? {
                ...c,
                quantity: c.quantity + delta,
                totalPrice: (c.quantity + delta) * c.unitPrice,
              }
            : c,
        )
        .filter((c) => c.quantity > 0),
    );
  };

  const removeItem = (cartId) =>
    setCart((prev) => prev.filter((c) => c.cartId !== cartId));

  const subtotal = cart.reduce((s, c) => s + c.totalPrice, 0);
  const discountValue =
    discount.type === "fixed"
      ? discount.value
      : (subtotal * discount.value) / 100;
  const taxAmount = ((subtotal - discountValue) * TAX_RATE) / 100;
  const total = subtotal - discountValue + taxAmount;

  const items = MENU.filter(
    (i) =>
      (category === null || i.category_id === category) &&
      i.name.includes(search),
  );

  const isDocument = view === "receipt" || view === "zreport";

  return (
    <section id="demo" className="py-20">
      <Container>
        <SectionHeading
          title="نفس واجهة مقهى الحقيقية"
          description="مكوّنات مأخوذة من التطبيق الفعلي: الصفحة الرئيسية ،شاشة الكاشير، إضافات المنتجات، والفواتير الحرارية - تفاعلية مباشرة أمامك."
        />

        {/* Real-app navigation bar */}
        <div className="mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 flex overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex gap-2 mx-auto sm:mx-0 w-max shrink-0">
            {[
              { id: "home", label: "الرئيسية", icon: Armchair },
              { id: "menu", label: "الكاشير", icon: LayoutGrid },
              { id: "receipt", label: "الفاتورة الحرارية", icon: ReceiptText },
              { id: "zreport", label: "تقرير الوردية", icon: FileBarChart },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setView(t.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors whitespace-nowrap",
                    view === t.id
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                      : "border border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Receipt / Z-report preview */}
        <div key={view} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {isDocument ? (
          <div className="mx-auto flex max-w-fit justify-center rounded-2xl border border-border bg-muted/40 p-6 sm:p-10 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-4 bg-muted-foreground/10 z-10 rounded-t-2xl shadow-inner" />
            <div className="animate-print pt-2">
              <ThermalReceipt z={view === "zreport"} />
            </div>
          </div>
        ) : view === "home" ? (
          /* ---- Real HOME view: Takeaway button + TablesGrid ---- */

          <MacWindow>
            <div className="border-b border-border px-5 py-4 shrink-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  اختر طاولة
                </h2>
                <button
                  onClick={() => {
                    setActiveTable(null);
                    setView("menu");
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5" />
                  تيك اواي
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    onClick={() => {
                      setActiveTable({ id: table.id, name: table.name });
                      setView("menu");
                    }}
                    className={cn(
                      "p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all active:scale-95 shadow-sm hover:shadow-md",
                      table.status === "occupied"
                        ? "bg-red-50 border-red-200 text-red-900"
                        : "bg-card border-border text-foreground hover:border-primary/50",
                    )}
                  >
                    <div
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold",
                        table.status === "occupied"
                          ? "bg-red-200 text-red-800"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {table.id}
                    </div>
                    <span className="font-bold text-lg">{table.name}</span>
                    <span
                      className={cn(
                        "text-xs px-3 py-1 rounded-full font-bold",
                        table.status === "occupied"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700",
                      )}
                    >
                      {table.status === "occupied" ? "مشغولة" : "متاحة"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </MacWindow>
        ) : (
          <MacWindow className="mx-auto max-w-6xl bg-background shadow-xl flex flex-col md:flex-row md:h-155">
            <div className="flex-1 flex flex-col min-w-0">
              <header className="flex flex-col gap-5 mb-4 shrink-0 p-5 pb-0">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setView("home")}
                      className="p-2 bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                    <h2 className="text-2xl font-bold text-foreground">
                      {activeTable ? activeTable.name : "تيك اواي"}
                    </h2>
                  </div>
                  <div className="relative w-72 max-w-full">
                    <input
                      type="text"
                      placeholder="ابحث عن منتج..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-right"
                      style={{ paddingRight: "1rem", paddingLeft: "2.5rem" }}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <CategoryBar
                  categories={CATEGORIES}
                  activeCategoryId={category}
                  onSelectCategory={setCategory}
                />
              </header>

              <main className="flex-1 overflow-y-auto pr-2 pb-6 p-5 pt-1">
                {items.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-4">
                    {items.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onItemClick={(it) => setModItem(it)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                    <Search className="w-12 h-12 mb-4 opacity-20" />
                    <p>لا توجد منتجات</p>
                  </div>
                )}
              </main>
            </div>

            {/* Real Cart sidebar */}
            <div className="md:w-90 bg-card border-t md:border-t-0 md:border-r border-border md:h-full flex flex-col shadow-sm z-10 shrink-0 min-h-0">
              <div className="p-5 border-b border-border/50 flex justify-between items-center bg-muted/10">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    {activeTable ? activeTable.name : "فاتورة الطلب"}
                  </h2>
                  {activeTable && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-bold">
                      طاولة محددة
                    </span>
                  )}
                </div>
                <div className="flex gap-4 items-center">
                  {cart.length > 0 && (
                    <button
                      onClick={() => setCart([])}
                      className="text-sm text-destructive hover:underline font-medium"
                    >
                      مسح السلة
                    </button>
                  )}
                </div>
              </div>

              {!activeTable && (
                <div className="p-3 bg-muted/20 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="flex bg-muted rounded-lg p-1">
                      <button
                        onClick={() => setIsDelivery(false)}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-xs font-bold transition-all",
                          !isDelivery
                            ? "bg-card text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        استلام
                      </button>
                      <button
                        onClick={() => setIsDelivery(true)}
                        className={cn(
                          "px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1",
                          isDelivery
                            ? "bg-card text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <Truck className="w-3.5 h-3.5" />
                        توصيل
                      </button>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {isDelivery ? "توصيل الطلب" : "استلام من المتجر"}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex-1 overflow-y-auto min-h-0">
                {cart.length === 0 && (
                  <div className="p-8 text-center text-sm text-muted-foreground">
                    السلة فارغة
                  </div>
                )}
                {cart.map((c) => (
                  <CartItemComponent
                    key={c.cartId}
                    item={c}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>

              <div className="p-4 border-t border-border/50 bg-card">
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setShowDiscount((v) => !v)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 font-medium py-2 rounded-lg transition-all text-sm",
                      discount.type !== "none"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-muted text-muted-foreground hover:bg-muted/80",
                    )}
                  >
                    <Tag className="w-4 h-4" />
                    خصم
                  </button>
                  <button
                    onClick={() => setShowNote((v) => !v)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 font-medium py-2 rounded-lg transition-all text-sm",
                      orderNote
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-muted text-muted-foreground hover:bg-muted/80",
                    )}
                  >
                    <FileText className="w-4 h-4" />
                    {orderNote ? "تعديل الملاحظة" : "ملاحظة الطلب"}
                  </button>
                </div>

                {showDiscount && (
                  <div className="mb-3 rounded-xl border border-border bg-muted/30 p-3 animate-in zoom-in-95">
                    <p className="mb-2 text-xs font-bold text-muted-foreground">
                      نوع الخصم
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setDiscount({ type: "percent", value: 10 });
                          setShowDiscount(false);
                        }}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-bold",
                          discount.type === "percent"
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-muted-foreground hover:bg-accent",
                        )}
                      >
                        خصم 10%
                      </button>
                      <button
                        onClick={() => {
                          setDiscount({ type: "fixed", value: 20 });
                          setShowDiscount(false);
                        }}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-xs font-bold",
                          discount.type === "fixed"
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-muted-foreground hover:bg-accent",
                        )}
                      >
                        خصم 20 {CURRENCY}
                      </button>
                      <button
                        onClick={() => {
                          setDiscount({ type: "none", value: 0 });
                          setShowDiscount(false);
                        }}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground hover:bg-accent"
                      >
                        إزالة الخصم
                      </button>
                    </div>
                  </div>
                )}

                {showNote && (
                  <div className="mb-3 animate-in zoom-in-95">
                    <textarea
                      autoFocus
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="مثال: بدون سكر، ساخن جداً..."
                      className="w-full h-20 p-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-right resize-none text-sm"
                    />
                    <button
                      onClick={() => setShowNote(false)}
                      className="mt-1.5 w-full rounded-lg bg-muted py-1.5 text-xs font-bold text-muted-foreground hover:bg-accent"
                    >
                      تم
                    </button>
                  </div>
                )}

                {orderNote && !showNote && (
                  <div className="mb-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-bold text-primary">
                    ملاحظة الطلب: {orderNote}
                  </div>
                )}

                <div className="bg-muted/30 rounded-xl p-4 border border-border/50 mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>المجموع:</span>
                    <span>
                      {subtotal.toFixed(2)} {CURRENCY}
                    </span>
                  </div>

                  {discount.type !== "none" && (
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>
                        خصم ({discount.type === "fixed" ? "مبلغ ثابت" : "نسبة"}
                        ):
                      </span>
                      <span className="text-destructive">
                        -{discountValue.toFixed(2)} {CURRENCY}
                      </span>
                    </div>
                  )}

                  {taxAmount > 0 && (
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>الضريبة ({TAX_RATE}%):</span>
                      <span>
                        +{taxAmount.toFixed(2)} {CURRENCY}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-xl font-bold text-foreground mt-2 pt-2 border-t border-border/50">
                    <span>الإجمالي:</span>
                    <span className="text-primary">
                      {total.toFixed(2)} {CURRENCY}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 font-bold text-base py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 bg-orange-100 text-orange-700 hover:bg-orange-200 active:scale-[0.98]">
                    <FileText className="w-5 h-5" />
                    {activeTable ? "حفظ للطاولة" : "حفظ"}
                  </button>
                  <button className="flex-1 font-bold text-base py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 active:scale-[0.98]">
                    <Printer className="w-5 h-5" />
                    طباعة
                  </button>
                </div>

                <button
                  onClick={() => cart.length > 0 && setView("receipt")}
                  className="w-full font-bold text-lg py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 mt-2 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  تأكيد الدفع
                </button>
              </div>
            </div>
          </MacWindow>
        )}
        </div>

        {/* Real ModifierModal (replicates app) */}
        {modItem && (
          <ModifierModalView
            item={modItem}
            onClose={() => setModItem(null)}
            onConfirm={confirmModifier}
          />
        )}
      </Container>
    </section>
  );
}

function ModifierModalView({ item, onClose, onConfirm }) {
  const [selectedModifiers, setSelectedModifiers] = useState([]);
  const [note, setNote] = useState("");

  const toggleModifier = (mod) => {
    setSelectedModifiers((prev) =>
      prev.some((m) => m.id === mod.id)
        ? prev.filter((m) => m.id !== mod.id)
        : [...prev, mod],
    );
  };

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-lg rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
          <div>
            <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
            <p className="text-muted-foreground mt-1 text-sm">تخصيص الطلب</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-8">
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              الإضافات
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {MODIFIERS.map((mod) => {
                const isSelected = selectedModifiers.some(
                  (m) => m.id === mod.id,
                );
                return (
                  <button
                    key={mod.id}
                    onClick={() => toggleModifier(mod)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border transition-all text-right",
                      isSelected
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-background border-border hover:border-primary/50 text-foreground",
                    )}
                  >
                    <span className="font-medium">{mod.name}</span>
                    <div className="flex items-center gap-2">
                      {mod.price > 0 && (
                        <span className="text-sm font-semibold opacity-90">
                          +{mod.price}
                        </span>
                      )}
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center",
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-border/80",
                        )}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              ملاحظات (اختياري)
            </h4>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="مثال: بدون سكر، ساخن جداً..."
              className="w-full h-24 p-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-right resize-none"
            />
          </div>
        </div>

        <div className="p-6 border-t border-border bg-muted/10">
          <button
            onClick={() => onConfirm(selectedModifiers, note)}
            className="w-full rounded-xl bg-primary py-3.5 font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            إضافة للطلب
          </button>
        </div>
      </div>
    </div>
  );
}
