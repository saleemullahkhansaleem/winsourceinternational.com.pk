import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { productsData as products, servicesData as services } from "./Home"; // Assuming these hold products and services related to minerals and mining
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Win Source International
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
              <TabsTrigger value="history">Our History</TabsTrigger>
              <TabsTrigger value="products">Our Products</TabsTrigger>
              <TabsTrigger value="services">Our Services</TabsTrigger>
            </TabsList>
            <TabsContent value="vision">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Committed to becoming a global leader in the mining and
                    minerals industry by delivering sustainable solutions for
                    the extraction and supply of high-quality minerals.
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    We aim to lead the mining sector with innovative practices,
                    ensuring the highest standards of environmental and social
                    responsibility while meeting the growing global demand for
                    mineral resources.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Business Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Integrity – Excellence – Sustainability "Striving to build
                    long-term partnerships through mutual respect, innovation,
                    and a shared commitment to growth in the minerals and mining
                    industry."
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">
                    Since its establishment in 2008, Win Source International
                    has become a recognized leader in the mining and minerals
                    industry. Our commitment to quality and sustainability has
                    driven our growth:
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Pioneering the extraction of rare and valuable minerals
                        with advanced technologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Adopting sustainable and eco-friendly mining practices
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                      <span>
                        Building strategic alliances to secure a steady supply
                        of minerals to global markets
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="products">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mineral Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-3`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                        <Link
                          to={product?.path}
                          className="text-lg hover:text-primary"
                        >
                          {product.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Our Mining Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-center space-x-3`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ChevronRight className="h-6 w-6 text-primary flex-shrink-0" />
                        <Link
                          to={service?.path}
                          className="text-lg hover:text-primary"
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
